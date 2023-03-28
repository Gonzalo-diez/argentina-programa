import { Component, OnInit } from '@angular/core';
import { inicio } from 'src/app/Model/inicio.model';
import { InicioService } from 'src/app/Service/inicio.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    inicio: inicio[] = [];
    
    constructor(public inicioService: InicioService) { }

    ngOnInit(): void {
        this.cargarInicio();
    }

    cargarInicio() {
        this.inicioService.traer().subscribe(data => {this.inicio = data});
    }
}