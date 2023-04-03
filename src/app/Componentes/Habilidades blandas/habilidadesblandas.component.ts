import { Component, OnInit } from '@angular/core';
import { habilidadesblandas } from 'src/app/Model/habilidadesblandas.model';
import { HabilidadesblandasService } from 'src/app/Service/habilidadesblandas.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
    selector: 'app-habilidades-blandas',
    templateUrl: './habilidadesblandas.component.html',
    styleUrls: ['./habilidadesblandas.component.css']
})

export class HabilidadesBlandasComponent implements OnInit {
    habilidadesblandas: habilidadesblandas[] = [];

    constructor(private habilidadesBlandasService: HabilidadesblandasService, private tokenService: TokenService) { }

    isLog = false;

    ngOnInit(): void {
        this.cargarHabilidadesBlandas();
        if(this.tokenService.getToken()) {
            this.isLog = true;
        }
        else {
            this.isLog = false;
        }
    }

    cargarHabilidadesBlandas() {
        this.habilidadesBlandasService.traer().subscribe(data => {this.habilidadesblandas = data});
    }

    borrarHabilidadBlanda(id?: number) {
        if(id != undefined) {
            this.habilidadesBlandasService.borrar(id).subscribe(data => {this.cargarHabilidadesBlandas()}, err => {alert("No se puede borrar esta habilidad blanda")})
        }
    }
}