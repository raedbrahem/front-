import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringEventListComponent } from './tutoring-event-list.component';

describe('TutoringEventListComponent', () => {
  let component: TutoringEventListComponent;
  let fixture: ComponentFixture<TutoringEventListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutoringEventListComponent]
    });
    fixture = TestBed.createComponent(TutoringEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
