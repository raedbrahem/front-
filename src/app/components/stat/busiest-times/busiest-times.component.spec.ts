import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusiestTimesComponent } from './busiest-times.component';

describe('BusiestTimesComponent', () => {
  let component: BusiestTimesComponent;
  let fixture: ComponentFixture<BusiestTimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusiestTimesComponent]
    });
    fixture = TestBed.createComponent(BusiestTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
