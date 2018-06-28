import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DashboardComponent} from "./dashboard.component";
import {DashboardService} from "./dashboard.service";
import {DashboardRoutingModule} from "./dashboard-routing";
import { ChartsModule } from 'ng2-charts';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ DashboardComponent],
  providers: [ DashboardService ]
})
export class DashboardModule { }
