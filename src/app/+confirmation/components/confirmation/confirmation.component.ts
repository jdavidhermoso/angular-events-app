import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  @Input()
  public title: string;

  @Input()
  public text: string;

  @Output()
  public onAccept: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public onReject: EventEmitter<void> = new EventEmitter<void>();

  constructor(private confirmationService: ConfirmationService) {
  }

  public onAcceptClicked(): void {
    this.onAccept.emit();
    this.confirmationService.closeConfirmation();

  }

  public onRejectClicked(): void {
    this.onReject.emit();
    this.confirmationService.closeConfirmation();
  }
}
