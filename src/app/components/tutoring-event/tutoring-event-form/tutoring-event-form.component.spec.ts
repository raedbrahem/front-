import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringEventFormComponent } from './tutoring-event-form.component';

describe('TutoringEventFormComponent', () => {
  let component: TutoringEventFormComponent;
  let fixture: ComponentFixture<TutoringEventFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutoringEventFormComponent]
    });
    fixture = TestBed.createComponent(TutoringEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
