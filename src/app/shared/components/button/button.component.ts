import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  public text: string;

  @Input()
  public type: string = 'secondary';

  @Output()
  public onClick: EventEmitter<void> = new EventEmitter<void>();
}
