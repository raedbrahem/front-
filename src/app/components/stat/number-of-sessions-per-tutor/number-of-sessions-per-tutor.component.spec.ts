import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfSessionsPerTutorComponent } from './number-of-sessions-per-tutor.component';

describe('NumberOfSessionsPerTutorComponent', () => {
  let component: NumberOfSessionsPerTutorComponent;
  let fixture: ComponentFixture<NumberOfSessionsPerTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberOfSessionsPerTutorComponent]
    });
    fixture = TestBed.createComponent(NumberOfSessionsPerTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
