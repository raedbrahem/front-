import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularSubjectsComponent } from './most-popular-subjects.component';

describe('MostPopularSubjectsComponent', () => {
  let component: MostPopularSubjectsComponent;
  let fixture: ComponentFixture<MostPopularSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostPopularSubjectsComponent]
    });
    fixture = TestBed.createComponent(MostPopularSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
