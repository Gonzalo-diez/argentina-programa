import { Component, OnInit } from '@angular/core';
import { habilidadesblandas } from 'src/app/Model/habilidadesblandas.model';
import { HabilidadesblandasService } from 'src/app/Service/habilidadesblandas.service';

@Component({
    selector: 'app-habilidades-blandas',
    templateUrl: './habilidadesblandas.component.html',
    styleUrls: ['./habilidadesblandas.component.css']
})

export class HabilidadesBlandasComponent implements OnInit {
    habilidadesblandas: habilidadesblandas[] = [];
    constructor(public habilidadesBlandasService: HabilidadesblandasService) { }
    ngOnInit(): void {
        this.habilidadesBlandasService.traer().subscribe(data => {this.habilidadesblandas = data});
    }
}