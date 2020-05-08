import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TechEvent } from '../../../shared';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventItemComponent {
  @Input()
  public eventItem: TechEvent;

  @Output()
  public onSignUp: EventEmitter<void> = new EventEmitter<void>();

  public onSignUpClicked() {
    this.onSignUp.emit();
  }
}
