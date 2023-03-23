import { Component, OnInit } from '@angular/core';
import { footer } from 'src/app/Model/footer.model';
import { FooterService } from 'src/app/Service/footer.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    footer: footer[] = [];
    constructor(public footerService: FooterService) { }
    ngOnInit(): void {
        this.footerService.traer().subscribe(data => {this.footer = data});
    }
}