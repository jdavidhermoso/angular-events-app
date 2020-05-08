import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AllEventsPageComponent, EventItemComponent } from './components';
import { ConfirmationModule } from '../+confirmation/confirmation.module';

const routes: Route[] = [
  {
    path: '',
    component: AllEventsPageComponent
  }
];

@NgModule({
  declarations: [
    AllEventsPageComponent,
    EventItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ConfirmationModule
  ],
  providers: [
    DatePipe
  ]
})
export class AllEventsModule {
}
