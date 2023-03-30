import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { editarCurriculumComponent } from './editar-curriculum.component';
import { CurriculumService } from '../../../Service/curriculum.service';

@NgModule({
  declarations: [editarCurriculumComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [CurriculumService],
})
export class editarTrabajosModule {}