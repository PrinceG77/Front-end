import { TestBed } from '@angular/core/testing';

import { FormulaireinscriptionService } from './formulaireinscription.service';

describe('FormulaireinscriptionService', () => {
  let service: FormulaireinscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaireinscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
