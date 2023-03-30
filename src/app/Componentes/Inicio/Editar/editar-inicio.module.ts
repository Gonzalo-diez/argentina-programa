import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { editarInicioComponent } from './editar-inicio.component';
import { InicioService } from '../../../Service/inicio.service';

@NgModule({
  declarations: [editarInicioComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [InicioService],
})
export class editarTrabajosModule {}