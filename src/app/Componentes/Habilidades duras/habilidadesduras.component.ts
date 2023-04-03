import { Component, OnInit } from '@angular/core';
import { habilidadesduras } from 'src/app/Model/habilidadesduras.model';
import { HabilidadesdurasService } from 'src/app/Service/habilidadesduras.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
    selector: 'app-habilidades-duras',
    templateUrl: './habilidadesduras.component.html',
    styleUrls: ['./habilidadesduras.component.css']
})
export class HabilidadesDurasComponent implements OnInit {
    habilidadesduras: habilidadesduras[] = [];

    constructor(private habilidadesDurasService: HabilidadesdurasService, private tokenService: TokenService) { }

    isLog = false;

    ngOnInit(): void {
        this.cargarHabilidadesDuras(); 
        if(this.tokenService.getToken()) {
            this.isLog = true;
        }
        else {
            this.isLog = false;
        }
    }

    cargarHabilidadesDuras() {
        this.habilidadesDurasService.traer().subscribe(data => {this.habilidadesduras = data});
    }

    borrarHabilidadDura(id?: number) {
        if(id != undefined) {
            this.habilidadesDurasService.borrar(id).subscribe(data => {this.cargarHabilidadesDuras()}, err => {alert("No se puede borrar esta habilidad dura")})
        }
    }
}