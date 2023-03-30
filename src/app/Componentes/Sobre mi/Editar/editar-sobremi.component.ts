import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sobremi } from 'src/app/Model/sobremi.model';
import { SobremiService } from 'src/app/Service/sobremi.service';

@Component({
    selector: 'app-editar-educacion',
    templateUrl: './editar-sobremi.component.html',
    styleUrls: ['./editar-sobremi.component.css']
})

export class editarSobremiComponent implements OnInit {
    pruebaSobremi: sobremi = new sobremi('', '');
    sobreTitulo: string = '';
    sobreTexto: string = '';

    constructor(private sobremiService: SobremiService, private activedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.sobremiService.traerById(id).subscribe(data => {this.pruebaSobremi = data}, err => {
            alert("error al modificar sobre mi");
            this.router.navigate(['']);
        })
    }

    actualizarSobreMi(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.sobremiService.actualizar(id, this.pruebaSobremi).subscribe(data => {
            alert("Sobre mi ha sido modificado exitosamente");
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar sobre mi");
            this.router.navigate(['/editar/{{sobremi.id}}']);
        })
    }
}