import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { footer } from 'src/app/Model/footer.model';
import { FooterService } from 'src/app/Service/footer.service';

@Component({
    selector: 'app-editar-educacion',
    templateUrl: './editar-footer.component.html',
    styleUrls: ['./editar-footer.component.css']
})

export class editarFooterComponent implements OnInit {
    pruebaFooter: footer = new footer('', '', '');
    footerNombre: string = '';
    footerLinkUrl: string = '';
    footerInstagramUrl: string = '';

    constructor(private footerService: FooterService, private activedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.footerService.traerById(id).subscribe(data => {this.pruebaFooter = data}, err => {
            alert("error al modificar el footer");
            this.router.navigate(['']);
        })
    }

    actualizarFooter(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.footerService.actualizar(id, this.pruebaFooter).subscribe(data => {
            alert("El footer ha sido modificado exitosamente");
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar el footer");
            this.router.navigate(['/editar/{{footer.id}}']);
        })
    }
}