import { Component, OnInit } from '@angular/core';
import { sobremi } from 'src/app/Model/sobremi.model';
import { SobremiService } from 'src/app/Service/sobremi.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
    selector: 'app-sobremi',
    templateUrl: './sobremi.component.html',
    styleUrls: ['./sobremi.component.css']
})
export class SobreMiComponent implements OnInit {
    sobremi: sobremi[] = [];

    constructor(private SobremiService: SobremiService, private tokenService: TokenService) { }

    isLog = false;

    ngOnInit(): void {
        this.cargarSobreMi();
        if(this.tokenService.getToken()) {
            this.isLog = true
        }
        else {
            this.isLog = false;
        }
    }

    cargarSobreMi() {
        this.SobremiService.traer().subscribe(data => {this.sobremi = data});
    }
}