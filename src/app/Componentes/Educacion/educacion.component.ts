import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/Model/educacion.model';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
    selector: 'app-educacion',
    templateUrl: './educacion.component.html',
    styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
    educacion: educacion[] = [];

    constructor(public EducacionService: EducacionService) { }

    ngOnInit(): void {
        this.cargarEducacion();
    }

    cargarEducacion() {
        this.EducacionService.traer().subscribe(data => {this.educacion = data});
    }

    borrarEducacion(id?: number) {
        if(id != undefined) {
            this.EducacionService.borrar(id).subscribe(data => {this.cargarEducacion()}, err => {alert("No se puede borrar esta educacion")});
        }
    }
}