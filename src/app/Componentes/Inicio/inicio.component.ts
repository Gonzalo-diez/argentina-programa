import { Component, OnInit } from '@angular/core';
import { inicio } from 'src/app/Model/inicio.model';
import { InicioService } from 'src/app/Service/inicio.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    inicio: inicio[] = [];
    
    constructor(private inicioService: InicioService, private tokenService: TokenService) { }

    isLog = false;

    ngOnInit(): void {
        this.cargarInicio();
        if(this.tokenService.getToken()) {
            this.isLog = true;
        }
        else {
            this.isLog = false;
        }
    }

    cargarInicio() {
        this.inicioService.traer().subscribe(data => {this.inicio = data});
    }
}