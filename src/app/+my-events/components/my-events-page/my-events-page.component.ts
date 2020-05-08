import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventsService, TechEvent } from '../../../shared';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RoutesEnum } from '../../../routes-labels.enum';

@Component({
  selector: 'app-my-events-page',
  templateUrl: './my-events-page.component.html',
  styleUrls: ['./my-events-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyEventsPageComponent {
  public signedUpEvents: Observable<TechEvent[]>;

  constructor(private eventsService: EventsService,
              private router: Router) {
    this.setSignedUpEvents();
  }

  public onCancelEventAttendance(eventId: number): void {
    this.eventsService.cancelAttendance(eventId)
      .subscribe((response: boolean) => {
        this.setSignedUpEvents();
      });
  }

  public onCtaClicked() {
    this.router.navigate([RoutesEnum.ALL_EVENTS]);
  }

  private setSignedUpEvents(): void {
    this.signedUpEvents = this.eventsService.getSignedUpEvents();
  }
}
