import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/Inicio/inicio.component';
import { LoginComponent } from './Componentes/Login/login.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
