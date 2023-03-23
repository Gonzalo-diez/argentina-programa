import { TestBed } from '@angular/core/testing';

import { HabilidadesblandasService } from './habilidadesblandas.service';

describe('HabilidadesblandasService', () => {
  let service: HabilidadesblandasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadesblandasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
