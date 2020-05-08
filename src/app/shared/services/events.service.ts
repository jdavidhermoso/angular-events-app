import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { City, Event, ITechEvent } from '../models';
import Rfilter from 'ramda/es/filter';
import RfindIndex from 'ramda/es/findIndex';
import RpropEq from 'ramda/es/propEq';
import { environment } from '../../../environments';

const getEventDuration = (startDate: string, endDate: string) =>
  new Date(endDate).getTime() - new Date(startDate).getTime();

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl: string = environment.production ? 'http://dev.juandavidhermoso.es/api/' :
    'http://localhost:8080/';
  private localStorageMyEventsKey: string = 'myevents';

  constructor(private httpClient: HttpClient) {
  }

  private transformEvents([locations, events]: [City[], Event[]]): ITechEvent[] {
    return events.map((event: Event) => {
      const eventCity = locations.filter((city: City) => city.id === event.city)[0];

      return {
        ...event,
        duration: getEventDuration(event.startDate, event.endDate),
        city: eventCity
      };
    });
  }

  public getAllEvents(): Observable<ITechEvent[]> {
    const cities$: Observable<City[]> = this.getCities();
    const events$ = this.httpClient.get<Event[]>(`${this.apiUrl}techEvents`);

    return combineLatest(cities$, events$).pipe(
      map(this.transformEvents)
    );
  }

  public getCities(): Observable<City[]> {
    return this.httpClient.get<Event[]>(`${this.apiUrl}locations`);
  }

  public getSignedUpEvents(): Observable<ITechEvent[]> {
    return of(JSON.parse(localStorage.getItem(this.localStorageMyEventsKey) || '[]'));
  }

  public signUp(techEvent: ITechEvent): Observable<boolean> {
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
      const signedUpEvents: ITechEvent[] = JSON.parse(localStorage.getItem(this.localStorageMyEventsKey) || '[]');
      const filteredEvents: ITechEvent[] = Rfilter((techEvent: ITechEvent) =>
        techEvent.id !== eventId, signedUpEvents);

      localStorage.setItem(this.localStorageMyEventsKey, JSON.stringify(filteredEvents));

      return of(true);
    } catch (e) {
      return of(false);
    }
  }
}
