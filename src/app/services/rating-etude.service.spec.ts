import { TestBed } from '@angular/core/testing';

import { RatingEtudeService } from './rating-etude.service';

describe('RatingEtudeService', () => {
  let service: RatingEtudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingEtudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
