import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { curriculum } from 'src/app/Model/curriculum.model';
import { CurriculumService } from 'src/app/Service/curriculum.service';

@Component({
    selector: 'app-editar-educacion',
    templateUrl: './editar-curriculum.component.html',
    styleUrls: ['./editar-curriculum.component.css']
})

export class editarCurriculumComponent implements OnInit {
    pruebaCurriculum: curriculum = new curriculum('', '');
    curriculumDescarga: string = '';
    curriculumImg: string = '';

    constructor(private curriculumService: CurriculumService, private activedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.curriculumService.traerById(id).subscribe(data => {this.pruebaCurriculum = data}, err => {
            alert("error al modificar educacion");
            this.router.navigate(['']);
        })
    }

    actualizarCurriculum(): void {
        const id = this.activedRoute.snapshot.params['id'];
        this.curriculumService.actualizar(id, this.pruebaCurriculum).subscribe(data => {
            alert("El curriculum ha sido modificado exitosamente");
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar el curriculum");
            this.router.navigate(['/editar/{{curriculum.id}}']);
        })
    }
}