import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './Componentes/Menu/menu.component';
import { InicioComponent } from './Componentes/Inicio/inicio.component';
import { LoginComponent } from './Componentes/Login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreMiComponent } from './Componentes/Sobre mi/sobremi.component';
import { HabilidadesComponent } from './Componentes/Habilidades/habilidades.component';
import { TrabajosComponent } from './Componentes/Trabajos/trabajos.component';
import { ContactoComponent } from './Componentes/Contacto/contacto.component';
import { CurriculumComponent } from './Componentes/Curriculum/curriculum.component';
import { FooterComponent } from './Componentes/Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    SobreMiComponent,
    HabilidadesComponent,
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
