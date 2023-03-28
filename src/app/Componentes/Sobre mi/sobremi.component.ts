import { Component, OnInit } from '@angular/core';
import { sobremi } from 'src/app/Model/sobremi.model';
import { SobremiService } from 'src/app/Service/sobremi.service';

@Component({
    selector: 'app-sobremi',
    templateUrl: './sobremi.component.html',
    styleUrls: ['./sobremi.component.css']
})
export class SobreMiComponent implements OnInit {
    sobremi: sobremi[] = [];

    constructor(public SobremiService: SobremiService) { }

    ngOnInit(): void {
        this.cargarSobreMi();
    }

    cargarSobreMi() {
        this.SobremiService.traer().subscribe(data => {this.sobremi = data});
    }
}