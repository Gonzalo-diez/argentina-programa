import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/Model/experiencia.model';
import { ExperienciaService } from 'src/app/Service/experiencia.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
    selector: 'app-experiencia',
    templateUrl: './experiencia.component.html',
    styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
    experiencia: experiencia[] = [];

    constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

    isLog = false;

    ngOnInit(): void {
        this.cargarExperiencia();
        if(this.tokenService.getToken()) {
            this.isLog = true;
        }
        else {
            this.isLog = false;
        }
    }

    cargarExperiencia() {
        this.experienciaService.traer().subscribe(data => {this.experiencia = data});
    }

    borrarExperiencia(id?: number) {
        if(id != undefined) {
            this.experienciaService.borrar(id).subscribe(data => {this.cargarExperiencia()}, err => {alert("No se puede borrar esta experiencia")});
        }
    }
}