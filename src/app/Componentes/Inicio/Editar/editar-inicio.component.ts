import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { inicio } from 'src/app/Model/inicio.model';
import { InicioService } from 'src/app/Service/inicio.service';

@Component({
    selector: 'app-editar-educacion',
    templateUrl: './editar-inicio.component.html',
    styleUrls: ['./editar-inicio.component.css']
})

export class editarInicioComponent implements OnInit {
    pruebaInicio: inicio = new inicio('', '', '', '', '');
    inicioNombre: string = '';
    inicioLinkUrl: string = '';
    inicioGitUrl: string = '';
    inicioImg: string = '';
    inicioTexto: string = '';

    constructor(private inicioService: InicioService, private activedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.inicioService.traerById(id).subscribe(data => {this.pruebaInicio = data}, err => {
            alert("error al modificar el inicio");
            this.router.navigate(['']);
        })
    }

    actualizarInicio(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.inicioService.actualizar(id, this.pruebaInicio).subscribe(data => {
            alert("El inicio ha sido modificado exitosamente");
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar el inicio");
            this.router.navigate(['/editar/{{inicio.id}}']);
        })
    }
}