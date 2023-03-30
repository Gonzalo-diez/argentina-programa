import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/Model/educacion.model';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
    selector: 'app-crear-educacion',
    templateUrl: './crear-educacion.component.html',
    styleUrls: ['./crear-educacion.component.css']
})

export class crearEducacionComponent implements OnInit {
    educacionTitulo: string = '';
    educacionImg: string = '';
    educacionUrl: string = '';

    constructor(private educacionService: EducacionService, private router: Router) {}

    ngOnInit(): void {
        
    }

    crearEducacion(): void {
        const educ = new educacion(this.educacionTitulo, this.educacionImg, this.educacionUrl);
        this.educacionService.guardar(educ).subscribe(data => {
            alert("La educacion ha sido añadida");
            this.router.navigate(['']);
        }, err => {
            alert("Un error ha ocurrido al añadir la educacion");
            this.router.navigate(['/crear'])
        })
    }
}