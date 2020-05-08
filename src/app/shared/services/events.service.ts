import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import Rfilter from 'ramda/es/filter';
import RfindIndex from 'ramda/es/findIndex';
import RpropEq from 'ramda/es/propEq';
import Rvalues from 'ramda/es/values';

import { City, Event, TechEvent } from '../models';
import { environment } from '../../../environments';
import { groupByDay, sortEventsByDate } from '../helpers';

const getEventDuration = (startDate: string, endDate: string) =>
  new Date(endDate).getTime() - new Date(startDate).getTime();

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private localStorageMyEventsKey: string = 'myevents';

  constructor(private httpClient: HttpClient) {
  }

  private transformEvents([cities, events]: [City[], Event[]]): TechEvent[] {
    return events.map((event: Event) => {
      const eventCity = cities.filter((city: City) => city.id === event.city)[0];

      return {
        ...event,
        duration: getEventDuration(event.startDate, event.endDate),
        city: eventCity,
        isFree: event.price > 0
      };
    });
  }

  public getAllEvents(): Observable<Array<TechEvent[]>> {
    const cities$: Observable<City[]> = this.getCities();
    const events$ = this.httpClient.get<Event[]>(`${environment.apiURL}techEvents`);

    return forkJoin(cities$, events$).pipe(
      map(this.transformEvents),
      map(
        (techEvents: TechEvent[]): Array<TechEvent[]> => {
          const groupedTechEvents: Array<TechEvent[]> = groupByDay(techEvents);
          return sortEventsByDate(Rvalues(groupedTechEvents));
        })
    );
  }

  public getCities(): Observable<City[]> {
    return this.httpClient.get<Event[]>(`${environment.apiURL}locations`);
  }

  public getSignedUpEvents(): Observable<TechEvent[]> {
    return of(JSON.parse(localStorage.getItem(this.localStorageMyEventsKey) || '[]'));
  }

  public signUp(techEvent: TechEvent): Observable<boolean> {
    try {
      const signedUpEvents = JSON.parse(localStorage.getItem(this.localStorageMyEventsKey) || '[]');

      if (RfindIndex(RpropEq('id', techEvent.id))(signedUpEvents) > -1) {
        // In a real api call, this response would be a HTTP Code 403 forbidden
        throw new Error('User already signed up for this event');
      }

      localStorage.setItem(this.localStorageMyEventsKey, JSON.stringify([
          ...signedUpEvents,
          techEvent
        ])
      );
      return of(true);
    } catch (e) {
      return of(false);
    }
  }

  public cancelAttendance(eventId: number): Observable<boolean> {
    try {
      const signedUpEvents: TechEvent[] = JSON.parse(localStorage.getItem(this.localStorageMyEventsKey) || '[]');
      const filteredEvents: TechEvent[] = Rfilter((techEvent: TechEvent) =>
        techEvent.id !== eventId, signedUpEvents);

      localStorage.setItem(this.localStorageMyEventsKey, JSON.stringify(filteredEvents));

      return of(true);
    } catch (e) {
      return of(false);
    }
  }
}
