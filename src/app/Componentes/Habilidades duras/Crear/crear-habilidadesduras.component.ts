import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidadesduras } from 'src/app/Model/habilidadesduras.model';
import { HabilidadesdurasService } from 'src/app/Service/habilidadesduras.service';

@Component({
    selector: 'app-crear-educacion',
    templateUrl: './crear-habilidadesduras.component.html',
    styleUrls: ['./crear-habilidadesduras.component.css']
})

export class crearHabilidadesDurasComponent implements OnInit {
    habilidadDuraNombre: string = '';
    porcentajeHD: number = 0;

    constructor(private habilidadesdurasService: HabilidadesdurasService, private router: Router) {}

    ngOnInit(): void {
        
    }

    crearHabilidadesDuras(): void {
        const hb = new habilidadesduras(this.habilidadDuraNombre, this.porcentajeHD);
        this.habilidadesdurasService.guardar(hb).subscribe(data => {
            alert("La habilidad dura ha sido añadida");
            this.router.navigate(['']);
        }, err => {
            alert("Un error ha ocurrido al añadir la habilidad dura");
            this.router.navigate(['/crear'])
        })
    }
}