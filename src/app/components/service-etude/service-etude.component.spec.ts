import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEtudeComponent } from './service-etude.component';

describe('ServiceEtudeComponent', () => {
  let component: ServiceEtudeComponent;
  let fixture: ComponentFixture<ServiceEtudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceEtudeComponent]
    });
    fixture = TestBed.createComponent(ServiceEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
