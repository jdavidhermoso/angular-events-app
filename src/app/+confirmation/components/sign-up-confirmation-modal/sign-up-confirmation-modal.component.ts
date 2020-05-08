import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-confirmation-modal',
  templateUrl: './sign-up-confirmation-modal.component.html',
  styleUrls: ['./sign-up-confirmation-modal.component.scss']
})
export class SignUpConfirmationModalComponent implements OnInit {
  @Input()
  public eventName: string;

  @Output()
  public onAccept: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public onReject: EventEmitter<void> = new EventEmitter<void>();

  public title: string = 'Attend to event';
  public text: string;

  public ngOnInit(): void {
    this.text = `Do you want to attend to '${this.eventName}'?`;
  }
}
