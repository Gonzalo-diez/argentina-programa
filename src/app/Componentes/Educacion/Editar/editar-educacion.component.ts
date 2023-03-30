import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/Model/educacion.model';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
    selector: 'app-editar-educacion',
    templateUrl: './editar-educacion.component.html',
    styleUrls: ['./editar-educacion.component.css']
})

export class editarEducacionComponent implements OnInit {
    pruebaEducacion: educacion = new educacion('', '', '');
    educacionTitulo: string = '';
    educacionImg: string = '';
    educacionUrl: string = '';

    constructor(private educacionService: EducacionService, private activedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.educacionService.traerById(id).subscribe(data => {this.pruebaEducacion = data}, err => {
            alert("error al modificar educacion");
            this.router.navigate(['']);
        })
    }

    actualizarEducacion(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.educacionService.actualizar(id, this.pruebaEducacion).subscribe(data => {
            alert("La educacion ha sido modificada exitosamente");
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar la educacion");
            this.router.navigate([`/editar/${this.pruebaEducacion.id}`]);
        })
    }
}