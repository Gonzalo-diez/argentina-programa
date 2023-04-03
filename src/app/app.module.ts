import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './Componentes/Portfolio/portfolio.component';
import { MenuComponent } from './Componentes/Menu/menu.component';
import { InicioComponent } from './Componentes/Inicio/inicio.component';
import { editarInicioComponent } from './Componentes/Inicio/Editar/editar-inicio.component';
import { LoginComponent } from './Componentes/Login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreMiComponent } from './Componentes/Sobre mi/sobremi.component';
import { editarSobremiComponent } from './Componentes/Sobre mi/Editar/editar-sobremi.component';
import { EducacionComponent } from './Componentes/Educacion/educacion.component';
import { editarEducacionComponent } from './Componentes/Educacion/Editar/editar-educacion.component';
import { crearEducacionComponent } from './Componentes/Educacion/Crear/crear-educacion.component';
import { TrabajosComponent } from './Componentes/Trabajos/trabajos.component';
import { editarTrabajosComponent } from './Componentes/Trabajos/Editar/editar-trabajos.component';
import { crearTrabajosComponent } from './Componentes/Trabajos/Crear/crear-trabajos.component';
import { HabilidadesBlandasComponent } from './Componentes/Habilidades blandas/habilidadesblandas.component';
import { editarHabilidadesBlandasComponent } from './Componentes/Habilidades blandas/Editar/editar-habilidadesblandas.component';
import { crearHabilidadesBlandasComponent } from './Componentes/Habilidades blandas/Crear/crear-habilidadesblandas.component';
import { HabilidadesDurasComponent } from './Componentes/Habilidades duras/habilidadesduras.component';
import { editarHabilidadesDurasComponent } from './Componentes/Habilidades duras/Editar/editar-habilidadesduras.component';
import { crearHabilidadesDurasComponent } from './Componentes/Habilidades duras/Crear/crear-habilidadesduras.component';
import { ContactoComponent } from './Componentes/Contacto/contacto.component';
import { CurriculumComponent } from './Componentes/Curriculum/curriculum.component';
import { editarCurriculumComponent } from './Componentes/Curriculum/Editar/editar-curriculum.component';
import { ExperienciaComponent } from './Componentes/Experiencia/experiencia.component';
import { editarExperienciaComponent } from './Componentes/Experiencia/Editar/editar-experiencia.component';
import { crearExperienciaComponent } from './Componentes/Experiencia/Crear/crear-experiencia.component';
import { FooterComponent } from './Componentes/Footer/footer.component';
import { editarFooterComponent } from './Componentes/Footer/Editar/editar-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MenuComponent,
    InicioComponent,
    editarInicioComponent,
    SobreMiComponent,
    editarSobremiComponent,
    EducacionComponent,
    editarEducacionComponent,
    crearEducacionComponent,
    HabilidadesBlandasComponent,
    editarHabilidadesBlandasComponent,
    crearHabilidadesBlandasComponent,
    HabilidadesDurasComponent,
    editarHabilidadesDurasComponent,
    crearHabilidadesDurasComponent,
    TrabajosComponent,
    editarTrabajosComponent,
    crearTrabajosComponent,
    ContactoComponent,
    CurriculumComponent,
    editarCurriculumComponent,
    ExperienciaComponent,
    editarExperienciaComponent,
    crearExperienciaComponent,
    FooterComponent,
    editarFooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

