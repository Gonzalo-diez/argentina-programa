import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CurriculumComponent } from "./Curriculum.component";

describe('CurriculumComponent', () => {
    let component: CurriculumComponent;
    let fixture: ComponentFixture<CurriculumComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ CurriculumComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CurriculumComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('debe crear', () => {
        expect(component).toBeTruthy();
    });
});