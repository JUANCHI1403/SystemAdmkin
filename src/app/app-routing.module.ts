import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PagesRoutingModule} from "./pages/pages.routing";
import {AuthRoutingModule} from "./auth/auth.routing";

import {NopagefoundComponent} from "./nopagefound/nopagefound.component";
//import {HeaderComponent} from "./shared/header/header.component";





const routes: Routes = [

// path: /dashboard, pagesroutin
 // path: /autch, authrouting

  { path: '', redirectTo: 'dashboard', pathMatch:'full'},
  { path: '**', component: NopagefoundComponent }
]


@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule

  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
