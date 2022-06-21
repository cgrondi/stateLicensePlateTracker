import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { MapComponent } from './map/map.component';
import { StateListComponent } from './state-list/state-list.component';
import { HeaderComponent } from './header/header.component';
import { StateComponent } from './state/state.component';
import { FooterComponent } from './footer/footer.component';
import { StateDetailComponent } from './state-detail/state-detail.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StateListComponent,
    HeaderComponent,
    StateComponent,
    FooterComponent,
    StateDetailComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
