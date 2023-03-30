import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trabajos } from 'src/app/Model/trabajos.model';
import { TrabajosService } from 'src/app/Service/trabajos.service';

@Component({
    selector: 'app-editar-educacion',
    templateUrl: './editar-trabajos.component.html',
    styleUrls: ['./editar-trabajos.component.css']
})

export class editarTrabajosComponent implements OnInit {
    pruebaTrabajos: trabajos = new trabajos('', '', '');
    trabajosTitulo: string = '';
    trabajosImg: string = '';
    trabajosUrl: string = '';

    constructor(private trabajosService: TrabajosService, private activedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.trabajosService.traerById(id).subscribe(data => {this.pruebaTrabajos = data}, err => {
            alert("error al modificar el trabajo");
            this.router.navigate(['']);
        })
    }

    actualizarTrabajos(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.trabajosService.actualizar(id, this.pruebaTrabajos).subscribe(data => {
            alert("El trabajo ha sido modificado exitosamente");
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar el trabajo");
            this.router.navigate(['/editar/{{trabajos.id}}']);
        })
    }
}