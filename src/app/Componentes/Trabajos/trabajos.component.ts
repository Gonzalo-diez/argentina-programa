import { Component, OnInit } from '@angular/core';
import { trabajos } from 'src/app/Model/trabajos.model';
import { TrabajosService } from 'src/app/Service/trabajos.service';

@Component({
    selector: 'app-trabajos',
    templateUrl: './trabajos.component.html',
    styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
    trabajos: trabajos[] = [];
    constructor(public trabajosService: TrabajosService) { }
    ngOnInit(): void {
        this.trabajosService.traer().subscribe(data => {this.trabajos = data});
    }
}