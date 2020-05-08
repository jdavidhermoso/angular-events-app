import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {
  @Input()
  public name: string;

  @Input()
  public city: string;

  @Input()
  public startDate: string;

  @Input()
  public isFree: boolean;

  @Input()
  public duration: number;

  public eventDurationLabel: string;

  public ngOnInit(): void {
    this.setDurationLabel();

  }

  private setDurationLabel(): void {
    const eventDuration: Date = new Date(this.duration);
    const hours: number = eventDuration.getHours();
    const minutes: number = eventDuration.getMinutes();
    const hoursLabel: string = hours > 0 ? `${hours}h` : '';
    const minutesLabel: string = minutes > 0 ? `${minutes}m` : '';

    this.eventDurationLabel = `${hoursLabel} ${minutesLabel}`;
  }

}
