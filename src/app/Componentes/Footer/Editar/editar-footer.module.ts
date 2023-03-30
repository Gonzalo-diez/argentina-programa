import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { editarFooterComponent } from './editar-footer.component';
import { FooterService } from '../../../Service/footer.service';

@NgModule({
  declarations: [editarFooterComponent],
  imports: [CommonModule, FormsModule], // add FormsModule here
  providers: [FooterService],
})
export class editarTrabajosModule {}