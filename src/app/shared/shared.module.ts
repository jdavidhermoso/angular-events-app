import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonComponent,
  EventActionsComponent,
  EventInfoComponent,
  EventsListComponent,
  EventsOfDayComponent,
  FilterComponent,
  FreeTagComponent,
  NoItemsComponent,
  NotificationComponent
} from './components';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceTagComponent } from './components/price-tag/price-tag.component';

@NgModule({
  declarations: [
    EventsListComponent,
    EventsOfDayComponent,
    EventInfoComponent,
    EventActionsComponent,
    ButtonComponent,
    NotificationComponent,
    FilterComponent,
    FreeTagComponent,
    NoItemsComponent,
    PriceTagComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EventsListComponent,
    EventsOfDayComponent,
    EventInfoComponent,
    EventActionsComponent,
    ButtonComponent,
    NotificationComponent,
    FilterComponent,
    FreeTagComponent,
    NoItemsComponent,
    PriceTagComponent
  ]
})

export class SharedModule {
}
