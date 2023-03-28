import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/Inicio/inicio.component';
import { SobreMiComponent } from './Componentes/Sobre mi/sobremi.component';
import { EducacionComponent } from './Componentes/Educacion/educacion.component';
import { HabilidadesBlandasComponent } from './Componentes/Habilidades blandas/habilidadesblandas.component';
import { HabilidadesDurasComponent } from './Componentes/Habilidades duras/habilidadesduras.component';
import { TrabajosComponent } from './Componentes/Trabajos/trabajos.component';
import { ContactoComponent } from './Componentes/Contacto/contacto.component';
import { CurriculumComponent } from './Componentes/Curriculum/curriculum.component';
import { FooterComponent } from './Componentes/Footer/footer.component';
import { LoginComponent } from './Componentes/Login/login.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: InicioComponent, outlet: 'app-inicio'},
    {path: '', component: SobreMiComponent, outlet: 'app-sobremi'},
    {path: '', component: EducacionComponent, outlet: 'app-educacion'},
    {path: '', component: HabilidadesBlandasComponent, outlet: 'app-habilidades-blandas'},
    {path: '', component: HabilidadesDurasComponent, outlet: 'app-habilidades-duras'},
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
