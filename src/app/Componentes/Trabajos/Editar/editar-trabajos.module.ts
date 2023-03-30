import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { editarTrabajosComponent } from './editar-trabajos.component';
import { TrabajosService } from '../../../Service/trabajos.service';

@NgModule({
  declarations: [editarTrabajosComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [TrabajosService],
})
export class editarTrabajosModule {}