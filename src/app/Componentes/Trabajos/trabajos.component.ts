import { Component, OnInit } from '@angular/core';
import { trabajos } from 'src/app/Model/trabajos.model';
import { TokenService } from 'src/app/Service/token.service';
import { TrabajosService } from 'src/app/Service/trabajos.service';

@Component({
    selector: 'app-trabajos',
    templateUrl: './trabajos.component.html',
    styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
    trabajos: trabajos[] = [];

    constructor(private trabajosService: TrabajosService, private tokenService: TokenService) { }

    isLog = false;

    ngOnInit(): void {
        this.cargarTrabajos(); 
        if(this.tokenService.getToken()) {
            this.isLog = true;
        }
        else {
            this.isLog = false;
        }
    }

    cargarTrabajos() {
        this.trabajosService.traer().subscribe(data => {this.trabajos = data});
    }

    borrarTrabajos(id?: number) {
        if(id != undefined) {
            this.trabajosService.borrar(id).subscribe(data => {this.cargarTrabajos()}, err => {alert("No se puede borrar este trabajo")})
        }
    }
}