import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { editarHabilidadesBlandasComponent } from './editar-habilidadesblandas.component';
import { HabilidadesblandasService } from '../../../Service/habilidadesblandas.service';

@NgModule({
  declarations: [editarHabilidadesBlandasComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [HabilidadesblandasService],
})
export class editarHabilidadesBlandasModule {}