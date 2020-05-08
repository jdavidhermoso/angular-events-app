import { Component, OnDestroy, OnInit } from '@angular/core';
import Rvalues from 'ramda/es/values';
import Rfilter from 'ramda/es/filter';
import Rflatten from 'ramda/es/flatten';
import { map } from 'rxjs/operators';
import { applyFilters, EventsService, Filter, groupByDay, ITechEvent, sortEventsByDate } from '../../../shared';
import { ConfirmationService } from '../../../+confirmation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-events-page',
  templateUrl: './all-events-page.component.html',
  styleUrls: ['./all-events-page.component.scss']
})
export class AllEventsPageComponent implements OnInit, OnDestroy {
  public eventsDays: Array<ITechEvent[]>;
  public tempEventToConfirmSignUp: ITechEvent;
  public filteredEventsDays: Array<ITechEvent[]> = [];
  public toggleConfirmation: any;

  private confirmationSubscription: Subscription;
  private filterSubscription: Subscription;

  constructor(private eventsService: EventsService,
              private confirmationService: ConfirmationService) {
    this.toggleConfirmation = this.confirmationService.toggleConfirmationModal;
  }

  public ngOnInit(): void {
    this.filterSubscription = this.eventsService.getAllEvents().pipe(
      map(
        (techEvents: ITechEvent[]): Array<ITechEvent[]> => {
          const groupedTechEvents: Array<ITechEvent[]> = groupByDay(techEvents);
          return sortEventsByDate(Rvalues(groupedTechEvents));
        })
    ).subscribe((eventsDays: Array<ITechEvent[]>) => {
      this.eventsDays = eventsDays;
      this.filteredEventsDays = [...this.eventsDays];
    });
  }

  public ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }

  public onEventSignUp(event: ITechEvent) {
    this.setTempEventToConfirmSignUp(event);
    this.confirmationService.openConfirmation({
      title: event.name,
      text: `Please, confirm Sign up to attend to ${event.name}!`,
      acceptText: 'Yes, I`m in!',
      rejectText: 'I`ll take a better thought'
    });
  }

  public onConfirmSignUp() {
    // In a real API I would send just the event id, not the whole object.
    this.eventsService.signUp(this.tempEventToConfirmSignUp);
    this.emtyTempEvent();
  }

  public onRejectSignUp() {
    this.emtyTempEvent();
  }

  public onFilter(filter: Filter) {
    const searchStr: string = filter.name ? filter.name.toLowerCase() : '';
    const onlyFree: boolean = filter.onlyFree;
    const filters = applyFilters(searchStr, onlyFree);
    const groupedTechEvents: Array<ITechEvent[]> = groupByDay(Rfilter(filters, Rflatten(this.eventsDays)));

    this.filteredEventsDays = sortEventsByDate(Rvalues(groupedTechEvents));
  }

  private setTempEventToConfirmSignUp(event: ITechEvent): void {
    this.tempEventToConfirmSignUp = event;
  }

  private emtyTempEvent() {
    this.tempEventToConfirmSignUp = null;
  }
}
