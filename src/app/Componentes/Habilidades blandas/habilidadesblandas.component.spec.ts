import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HabilidadesBlandasComponent } from "./habilidadesblandas.component";

describe('HabilidadesBlandasComponent', () => {
    let component: HabilidadesBlandasComponent;
    let fixture: ComponentFixture<HabilidadesBlandasComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ HabilidadesBlandasComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HabilidadesBlandasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('debe crear', () => {
        expect(component).toBeTruthy();
    });
});