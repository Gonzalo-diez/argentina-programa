import { TestBed } from '@angular/core/testing';

import { HabilidadesdurasService } from './habilidadesduras.service';

describe('HabilidadesdurasService', () => {
  let service: HabilidadesdurasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadesdurasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
