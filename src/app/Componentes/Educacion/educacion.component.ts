import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/Model/educacion.model';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
    selector: 'app-educacion',
    templateUrl: './educacion.component.html',
    styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
    educacion: educacion[] = [];

    constructor(public EducacionService: EducacionService) { }

    ngOnInit(): void {
        this.EducacionService.traer().subscribe(data => {this.educacion = data});
    }
}