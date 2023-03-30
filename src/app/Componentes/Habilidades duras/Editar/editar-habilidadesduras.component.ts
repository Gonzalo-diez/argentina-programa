import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { habilidadesduras } from 'src/app/Model/habilidadesduras.model';
import { HabilidadesdurasService } from 'src/app/Service/habilidadesduras.service';

@Component({
    selector: 'app-editar-educacion',
    templateUrl: './editar-habilidadesduras.component.html',
    styleUrls: ['./editar-habilidadesduras.component.css']
})

export class editarHabilidadesDurasComponent implements OnInit {
    pruebaHabilidadesduras: habilidadesduras = new habilidadesduras('', 0);
    habilidadBlandaNombre: string = '';
    porcentajeHB: number = 0;

    constructor(private habilidadesdurasService: HabilidadesdurasService, private activedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.habilidadesdurasService.traerById(id).subscribe(data => {this.pruebaHabilidadesduras = data}, err => {
            alert("error al modificar habilidad dura");
            this.router.navigate(['']);
        })
    }

    actualizarHabilidadesDuras(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.habilidadesdurasService.actualizar(id, this.pruebaHabilidadesduras).subscribe(data => {
          alert("La habilidad dura ha sido modificada exitosamente");
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la habilidad dura");
          this.router.navigate(['/editar/{{habilidadesduras.id}}']);
        })
      }
      
}