import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/Inicio/inicio.component';
import { SobreMiComponent } from './Componentes/Sobre mi/sobremi.component';
import { HabilidadesComponent } from './Componentes/Habilidades/habilidades.component';
import { TrabajosComponent } from './Componentes/Trabajos/trabajos.component';
import { ContactoComponent } from './Componentes/Contacto/contacto.component';
import { CurriculumComponent } from './Componentes/Curriculum/curriculum.component';
import { FooterComponent } from './Componentes/Footer/footer.component';
import { LoginComponent } from './Componentes/Login/login.component';
import { transition } from '@angular/animations';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: InicioComponent, outlet: 'app-inicio'},
    {path: '', component: SobreMiComponent, outlet: 'app-sobremi'},
    {path: '', component: HabilidadesComponent, outlet: 'app-habilidades'},
    {path: '', component: TrabajosComponent, outlet: 'app-trabajos'},
    {path: '', component: ContactoComponent, outlet: 'app-contacto'},
    {path: '', component: CurriculumComponent, outlet: 'app-curriculum'},
    {path: '', component: FooterComponent, outlet: 'app-footer'},
  ]},
  {path: 'Login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
