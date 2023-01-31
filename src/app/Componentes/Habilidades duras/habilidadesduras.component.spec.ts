import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HabilidadesDurasComponent } from "./habilidadesduras.component";

describe('HabilidadesDurasComponent', () => {
    let component: HabilidadesDurasComponent;
    let fixture: ComponentFixture<HabilidadesDurasComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ HabilidadesDurasComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HabilidadesDurasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('debe crear', () => {
        expect(component).toBeTruthy();
    });
});