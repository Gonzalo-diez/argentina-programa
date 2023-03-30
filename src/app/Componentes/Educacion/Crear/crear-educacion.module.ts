import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { crearEducacionComponent } from './crear-educacion.component';
import { EducacionService } from '../../../Service/educacion.service';

@NgModule({
  declarations: [crearEducacionComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [EducacionService],
})
export class crearEducacionModule {}