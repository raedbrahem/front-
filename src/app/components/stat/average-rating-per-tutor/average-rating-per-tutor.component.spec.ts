import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageRatingPerTutorComponent } from './average-rating-per-tutor.component';

describe('AverageRatingPerTutorComponent', () => {
  let component: AverageRatingPerTutorComponent;
  let fixture: ComponentFixture<AverageRatingPerTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageRatingPerTutorComponent]
    });
    fixture = TestBed.createComponent(AverageRatingPerTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
