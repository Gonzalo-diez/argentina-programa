import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trabajos } from 'src/app/Model/trabajos.model';
import { TrabajosService } from 'src/app/Service/trabajos.service';

@Component({
    selector: 'app-crear-educacion',
    templateUrl: './crear-trabajos.component.html',
    styleUrls: ['./crear-trabajos.component.css']
})

export class crearTrabajosComponent implements OnInit {
    trabajoTitulo: string = '';
    trabajoImg: string = '';
    trabajoUrl: string = '';

    constructor(private trabajosService: TrabajosService, private router: Router) {}

    ngOnInit(): void {
        
    }

    crearTrabajos(): void {
        const trabajo = new trabajos(this.trabajoTitulo, this.trabajoImg, this.trabajoUrl);
        this.trabajosService.guardar(trabajo).subscribe(data => {
            alert("La trabajos ha sido añadida");
            this.router.navigate(['']);
        }, err => {
            alert("Un error ha ocurrido al añadir la trabajos");
            this.router.navigate(['/crear'])
        })
    }
}