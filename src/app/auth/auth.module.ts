import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RegistrerComponent} from "./registrer/registrer.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    LoginComponent,
    RegistrerComponent,
  ],
  exports: [
    LoginComponent,
    RegistrerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
