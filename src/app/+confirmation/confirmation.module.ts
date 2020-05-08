import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmationComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { SignUpConfirmationModalComponent } from './components/sign-up-confirmation-modal';

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
