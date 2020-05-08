import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-free-tag',
  templateUrl: './free-tag.component.html',
  styleUrls: ['./free-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FreeTagComponent {}
