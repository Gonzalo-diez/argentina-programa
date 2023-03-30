import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { editarEducacionComponent } from './editar-educacion.component';
import { EducacionService } from '../../../Service/educacion.service';

@NgModule({
  declarations: [editarEducacionComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [EducacionService],
})
export class editarTrabajosModule {}