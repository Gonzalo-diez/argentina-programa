import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { editarHabilidadesDurasComponent } from './editar-habilidadesduras.component';
import { HabilidadesdurasService } from '../../../Service/habilidadesduras.service';

@NgModule({
  declarations: [editarHabilidadesDurasComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [HabilidadesdurasService],
})
export class editarHabilidadesDurasModule {}
