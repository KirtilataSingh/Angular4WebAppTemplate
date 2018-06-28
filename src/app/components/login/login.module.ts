import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {HttpModule} from "@angular/http";
import { CommonModule } from '@angular/common'; 
import {UtilsModule} from '../../shared/utils/utils.module'
@NgModule({
  imports: [
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    UtilsModule
  ],
  declarations: [ LoginComponent],
  providers: [ LoginService ]
})
export class LoginModule { }
