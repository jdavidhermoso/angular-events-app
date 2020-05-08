import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITechEvent } from '../../../shared';

@Component({
  selector: 'app-signedup-event',
  templateUrl: './signedup-event.component.html',
  styleUrls: ['./signedup-event.component.scss']
})
export class SignedupEventComponent {
  @Input()
  public eventItem: ITechEvent;

  @Output()
  public onCancel: EventEmitter<void> = new EventEmitter<void>();

  public onCancelClick() {
    this.onCancel.emit();
  }
}
