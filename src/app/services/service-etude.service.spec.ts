import { TestBed } from '@angular/core/testing';

import { ServiceEtudeService } from './service-etude.service';

describe('ServiceEtudeService', () => {
  let service: ServiceEtudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEtudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
