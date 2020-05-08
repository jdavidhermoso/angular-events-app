import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MyEventsPageComponent, SignedupEventComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';

const routes: Route[] = [
  {
    path: '',
    component: MyEventsPageComponent
  }
];

@NgModule({
  declarations: [
    MyEventsPageComponent,
    SignedupEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class MyEventsModule {
}
