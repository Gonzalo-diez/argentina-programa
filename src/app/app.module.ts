import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './Componentes/Menu/menu.component';
import { InicioComponent } from './Componentes/Inicio/inicio.component';
import { LoginComponent } from './Componentes/Login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreMiComponent } from './Componentes/Sobre mi/sobremi.component';
import { EducacionComponent } from './Componentes/Educacion/educacion.component';
import { TrabajosComponent } from './Componentes/Trabajos/trabajos.component';
import { HabilidadesBlandasComponent } from './Componentes/Habilidades blandas/habilidadesblandas.component';
import { HabilidadesDurasComponent } from './Componentes/Habilidades duras/habilidadesduras.component';
import { ContactoComponent } from './Componentes/Contacto/contacto.component';
import { CurriculumComponent } from './Componentes/Curriculum/curriculum.component';
import { FooterComponent } from './Componentes/Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    SobreMiComponent,
    EducacionComponent,
    HabilidadesBlandasComponent,
    HabilidadesDurasComponent,
    TrabajosComponent,
    ContactoComponent,
    CurriculumComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
