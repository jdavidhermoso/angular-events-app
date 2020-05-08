import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-events-of-day',
  templateUrl: './events-of-day.component.html',
  styleUrls: ['./events-of-day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class EventsOfDayComponent {
  @Input()
  public eventsDate: string;
}
