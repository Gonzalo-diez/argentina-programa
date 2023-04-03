import { Component, OnInit } from '@angular/core';
import { footer } from 'src/app/Model/footer.model';
import { FooterService } from 'src/app/Service/footer.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    footer: footer[] = [];
    constructor(private footerService: FooterService, private tokenService: TokenService) { }

    isLog = false;

    ngOnInit(): void {
        this.cargarFooter();
        if(this.tokenService.getToken()) {
            this.isLog = true;
        }
        else {
            this.isLog = false;
        }
    }

    cargarFooter() {
        this.footerService.traer().subscribe(data => {this.footer = data});
    }
}