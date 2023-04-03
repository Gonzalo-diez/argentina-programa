import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/Model/experiencia.model';
import { ExperienciaService } from 'src/app/Service/experiencia.service';

@Component({
    selector: 'app-editar-experiencia',
    templateUrl: './editar-experiencia.component.html',
    styleUrls: ['./editar-experiencia.component.css']
})

export class editarExperienciaComponent implements OnInit {
    pruebaExperiencia: experiencia = new experiencia('', '', '');
    experienciaNombre: string = '';
    experienciaDesde: string = '';
    experienciaHasta: string = '';

    constructor(private experienciaService: ExperienciaService, private activedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.experienciaService.traerById(id).subscribe(data => {this.pruebaExperiencia = data}, err => {
            alert("error al modificar experiencia");
            this.router.navigate(['']);
        })
    }

    actualizarExperiencia(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.experienciaService.actualizar(id, this.pruebaExperiencia).subscribe(data => {
            alert("La experiencia ha sido modificada exitosamente");
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar la experiencia");
            this.router.navigate([`/editar/${this.pruebaExperiencia.id}`]);
        })
    }
}