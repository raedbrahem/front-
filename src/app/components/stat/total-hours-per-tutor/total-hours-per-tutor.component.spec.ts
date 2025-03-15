import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalHoursPerTutorComponent } from './total-hours-per-tutor.component';

describe('TotalHoursPerTutorComponent', () => {
  let component: TotalHoursPerTutorComponent;
  let fixture: ComponentFixture<TotalHoursPerTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalHoursPerTutorComponent]
    });
    fixture = TestBed.createComponent(TotalHoursPerTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
