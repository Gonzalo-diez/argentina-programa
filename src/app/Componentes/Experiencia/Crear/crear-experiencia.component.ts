import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/Model/experiencia.model';
import { ExperienciaService } from 'src/app/Service/experiencia.service';

@Component({
    selector: 'app-crear-experiencia',
    templateUrl: './crear-experiencia.component.html',
    styleUrls: ['./crear-experiencia.component.css']
})

export class crearExperienciaComponent implements OnInit {
    experienciaNombre: string = '';
    experienciaDesde: string = '';
    experienciaHasta: string = '';

    constructor(private experienciaService: ExperienciaService, private router: Router) {}

    ngOnInit(): void {
        
    }

    crearExperiencia(): void {
        const exp = new experiencia(this.experienciaNombre, this.experienciaDesde, this.experienciaHasta);
        this.experienciaService.guardar(exp).subscribe(data => {
            alert("La experiencia ha sido añadida");
            this.router.navigate(['']);
        }, err => {
            alert("Un error ha ocurrido al añadir la experiencia");
            this.router.navigate(['/crear'])
        })
    }
}