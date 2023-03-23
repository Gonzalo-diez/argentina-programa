import { Component, OnInit } from '@angular/core';
import { curriculum } from 'src/app/Model/curriculum.model';
import { CurriculumService } from 'src/app/Service/curriculum.service';

@Component({
    selector: 'app-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
    curriculum: curriculum[] = [];
    constructor(public CurriculumService: CurriculumService) { }
    ngOnInit(): void {
        this.CurriculumService.traer().subscribe(data => {this.curriculum = data});
    }
}