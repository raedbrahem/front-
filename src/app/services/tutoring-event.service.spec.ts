import { TestBed } from '@angular/core/testing';

import { TutoringEventService } from './tutoring-event.service';

describe('TutoringEventService', () => {
  let service: TutoringEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutoringEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
