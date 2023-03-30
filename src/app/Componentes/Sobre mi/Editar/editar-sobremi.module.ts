import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { editarSobremiComponent } from './editar-sobremi.component';
import { SobremiService } from '../../../Service/sobremi.service';

@NgModule({
  declarations: [editarSobremiComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [SobremiService],
})
export class editarTrabajosModule {}