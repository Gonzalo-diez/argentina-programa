import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/Model/educacion.model';
import { EducacionService } from 'src/app/Service/educacion.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
    selector: 'app-educacion',
    templateUrl: './educacion.component.html',
    styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
    educacion: educacion[] = [];

    constructor(private educacionService: EducacionService, private tokenService: TokenService) { }

    isLog = false;

    ngOnInit(): void {
        this.cargarEducacion();
        if(this.tokenService.getToken()) {
            this.isLog = true;
        }
        else {
            this.isLog = false;
        }
    }

    cargarEducacion() {
        this.educacionService.traer().subscribe(data => {this.educacion = data});
    }

    borrarEducacion(id?: number) {
        if(id != undefined) {
            this.educacionService.borrar(id).subscribe(data => {this.cargarEducacion()}, err => {alert("No se puede borrar esta educacion")});
        }
    }
}