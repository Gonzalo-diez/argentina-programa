import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { crearTrabajosComponent } from './crear-trabajos.component';
import { TrabajosService } from '../../../Service/trabajos.service';

@NgModule({
  declarations: [crearTrabajosComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [TrabajosService],
})
export class crearTrabajosModule {}