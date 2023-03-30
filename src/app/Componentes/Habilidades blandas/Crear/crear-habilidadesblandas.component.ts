import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidadesblandas } from 'src/app/Model/habilidadesblandas.model';
import { HabilidadesblandasService } from 'src/app/Service/habilidadesblandas.service';

@Component({
    selector: 'app-crear-educacion',
    templateUrl: './crear-habilidadesblandas.component.html',
    styleUrls: ['./crear-habilidadesblandas.component.css']
})

export class crearHabilidadesBlandasComponent implements OnInit {
    habilidadBlandaNombre: string = '';
    porcentajeHB: number = 0;

    constructor(private habilidadesblandasService: HabilidadesblandasService, private router: Router) {}

    ngOnInit(): void {
        
    }

    crearHabilidadesBlandas(): void {
        const hb = new habilidadesblandas(this.habilidadBlandaNombre, this.porcentajeHB);
        this.habilidadesblandasService.guardar(hb).subscribe(data => {
            alert("La habilidad blanda ha sido añadida");
            this.router.navigate(['']);
        }, err => {
            alert("Un error ha ocurrido al añadir la habilidad blanda");
            this.router.navigate(['/crear'])
        })
    }
}