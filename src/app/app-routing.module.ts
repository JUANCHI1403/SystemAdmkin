import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProgressComponent} from "./pages/progress/progress.component";
import {NopagefoundComponent} from "./pages/nopagefound/nopagefound.component";
//import {HeaderComponent} from "./shared/header/header.component";
import {RegistrerComponent} from "./auth/registrer/registrer.component";
import {LoginComponent} from "./auth/login/login.component";
import {Grafica1Component} from "./pages/grafica1/grafica1.component";
import {PagesComponent} from "./pages/pages.component";

const routes: Routes = [
  { path: '', component: PagesComponent,
    //para crear o implementar rutas hijas
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'grafica1', component: Grafica1Component },
    { path: '', redirectTo: 'dashboard', pathMatch:'full'},
  ]
  },


  { path: 'registrer', component: RegistrerComponent },
  { path: 'login', component: LoginComponent },


  { path: '**', component: NopagefoundComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
