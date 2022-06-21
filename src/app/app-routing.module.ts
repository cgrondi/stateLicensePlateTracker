import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { SettingsComponent } from './settings/settings.component';
import { StateDetailComponent } from './state-detail/state-detail.component';
import { StateListComponent } from './state-list/state-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: StateListComponent},
  { path: 'map', component: MapComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'state/:state', component: StateDetailComponent},
  { path: '**', component: StateListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
