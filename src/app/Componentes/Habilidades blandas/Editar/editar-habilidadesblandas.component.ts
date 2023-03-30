import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { habilidadesblandas } from 'src/app/Model/habilidadesblandas.model';
import { HabilidadesblandasService } from 'src/app/Service/habilidadesblandas.service';

@Component({
  selector: 'app-editar-habilidadesblandas',
  templateUrl: './editar-habilidadesblandas.component.html',
  styleUrls: ['./editar-habilidadesblandas.component.css']
})
export class editarHabilidadesBlandasComponent implements OnInit {
  pruebaHabilidadesblandas: habilidadesblandas = new habilidadesblandas('', 0);
  habilidadBlandaNombre: string = '';
  porcentajeHB: number = 0;

  constructor(
    private habilidadesblandasService: HabilidadesblandasService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.params['id'];
    this.habilidadesblandasService
      .traerById(id)
      .subscribe(
        data => (this.pruebaHabilidadesblandas = data),
        err => {
          alert('error al modificar habilidad blanda');
          this.router.navigate(['']);
        }
      );
  }

  actualizarHabilidadesBlandas(): void {
    const id = this.activedRoute.snapshot.params['id'];
    this.habilidadesblandasService
      .actualizar(id, this.pruebaHabilidadesblandas)
      .subscribe(
        data => {
          alert('La habilidad blanda ha sido modificada exitosamente');
          this.router.navigate(['']);
        },
        err => {
          alert('Error al modificar la habilidad blanda');
          this.router.navigate([`/editar/${this.pruebaHabilidadesblandas.id}`]);
        }
      );
  }
}
