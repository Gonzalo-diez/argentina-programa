import { Component, OnInit } from '@angular/core';
import { habilidadesduras } from 'src/app/Model/habilidadesduras.model';
import { HabilidadesdurasService } from 'src/app/Service/habilidadesduras.service';

@Component({
    selector: 'app-habilidades-duras',
    templateUrl: './habilidadesduras.component.html',
    styleUrls: ['./habilidadesduras.component.css']
})
export class HabilidadesDurasComponent implements OnInit {
    habilidadesduras: habilidadesduras[] = [];
    constructor(public habilidadesDurasService: HabilidadesdurasService) { }
    ngOnInit(): void {
        this.habilidadesDurasService.traer().subscribe(data => {this.habilidadesduras = data});
    }
}