import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './routes-labels.enum';

const routes: Routes = [
  {
    path: RoutesEnum.ALL_EVENTS,
    loadChildren: () => import('./+all-events/all-events.module').then(mod => mod.AllEventsModule)
  },
  {
    path: RoutesEnum.MY_EVENTS,
    loadChildren: () => import('./+my-events/my-events.module').then(mod => mod.MyEventsModule)
  },
  {
    path: '**',
    redirectTo: RoutesEnum.ALL_EVENTS
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
