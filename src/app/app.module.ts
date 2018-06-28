import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, CommonModule, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { Ng2AutoBreadCrumb } from "ng2-auto-breadcrumb";
import { HttpClientModule } from '@angular/common/http'; 
import { UtilsModule } from './shared/utils/utils.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    Ng2AutoBreadCrumb,
    UtilsModule,
    HttpClientModule
  ],
  declarations: [
    LayoutComponent,
    AppComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
