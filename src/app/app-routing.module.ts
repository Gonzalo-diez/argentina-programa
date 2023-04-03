import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './Componentes/Portfolio/portfolio.component';
import { LoginComponent } from './Componentes/Login/login.component';
import { editarCurriculumComponent } from './Componentes/Curriculum/Editar/editar-curriculum.component';
import { editarEducacionComponent } from './Componentes/Educacion/Editar/editar-educacion.component';
import { editarFooterComponent } from './Componentes/Footer/Editar/editar-footer.component';
import { editarHabilidadesBlandasComponent } from './Componentes/Habilidades blandas/Editar/editar-habilidadesblandas.component';
import { editarHabilidadesDurasComponent } from './Componentes/Habilidades duras/Editar/editar-habilidadesduras.component';
import { editarInicioComponent } from './Componentes/Inicio/Editar/editar-inicio.component';
import { editarSobremiComponent } from './Componentes/Sobre mi/Editar/editar-sobremi.component';
import { editarTrabajosComponent } from './Componentes/Trabajos/Editar/editar-trabajos.component'; 
import { editarExperienciaComponent } from './Componentes/Experiencia/Editar/editar-experiencia.component';
import { crearEducacionComponent } from './Componentes/Educacion/Crear/crear-educacion.component';
import { crearHabilidadesBlandasComponent } from './Componentes/Habilidades blandas/Crear/crear-habilidadesblandas.component';
import { crearHabilidadesDurasComponent } from './Componentes/Habilidades duras/Crear/crear-habilidadesduras.component';
import { crearTrabajosComponent } from './Componentes/Trabajos/Crear/crear-trabajos.component';
import { crearExperienciaComponent } from './Componentes/Experiencia/Crear/crear-experiencia.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Editar-curriculum/:id', component: editarCurriculumComponent},
  {path: 'Editar-educacion/:id', component: editarEducacionComponent},
  {path: 'Editar-footer/:id', component: editarFooterComponent},
  {path: 'Editar-habilidades-blandas/:id', component: editarHabilidadesBlandasComponent},
  {path: 'Editar-habilidades-duras/:id', component: editarHabilidadesDurasComponent},
  {path: 'Editar-inicio/:id', component: editarInicioComponent},
  {path: 'Editar-sobremi/:id', component: editarSobremiComponent},
  {path: 'Editar-trabajos/:id', component: editarTrabajosComponent},
  {path: 'Editar-experiencia/:id', component: editarExperienciaComponent},
  {path: 'Crear-educacion', component: crearEducacionComponent},
  {path: 'Crear-habilidad-blanda', component: crearHabilidadesBlandasComponent},
  {path: 'Crear-habilidad-dura', component: crearHabilidadesDurasComponent},
  {path: 'Crear-trabajos', component: crearTrabajosComponent},
  {path: 'Crear-experiencia', component: crearExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
