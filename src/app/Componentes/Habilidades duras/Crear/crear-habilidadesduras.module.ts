import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { crearHabilidadesDurasComponent } from './crear-habilidadesduras.component';
import { HabilidadesdurasService } from '../../../Service/habilidadesduras.service';

@NgModule({
  declarations: [crearHabilidadesDurasComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [HabilidadesdurasService],
})
export class crearHabilidadesDurasModule {}
