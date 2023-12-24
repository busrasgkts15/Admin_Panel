import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardpanelComponent } from './components/dashboardpanel/dashboardpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminpanelComponent,
    DashboardpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
