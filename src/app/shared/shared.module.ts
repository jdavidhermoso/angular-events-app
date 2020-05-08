import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsListComponent, EventsOfDayComponent } from './components';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { EventActionsComponent } from './components/event-actions/event-actions.component';
import { ButtonComponent } from './components/button/button.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FreeTagComponent } from './components/free-tag/free-tag.component';
import { NoItemsComponent } from './components/no-items/no-items.component';

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
    NoItemsComponent
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
    NoItemsComponent
  ]
})

export class SharedModule {
}
