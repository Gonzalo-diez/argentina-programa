import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { crearHabilidadesBlandasComponent } from './crear-habilidadesblandas.component';
import { HabilidadesblandasService } from '../../../Service/habilidadesblandas.service';

@NgModule({
  declarations: [crearHabilidadesBlandasComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [HabilidadesblandasService],
})
export class crearHabilidadesBlandasModule {}