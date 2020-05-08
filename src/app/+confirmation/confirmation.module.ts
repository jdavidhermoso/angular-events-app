import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmationComponent, SignUpConfirmationModalComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ConfirmationComponent,
    SignUpConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ConfirmationComponent,
    SignUpConfirmationModalComponent
  ]
})

export class ConfirmationModule {
}
