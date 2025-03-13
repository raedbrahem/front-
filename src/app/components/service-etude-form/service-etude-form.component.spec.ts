import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEtudeFormComponent } from './service-etude-form.component';

describe('ServiceEtudeFormComponent', () => {
  let component: ServiceEtudeFormComponent;
  let fixture: ComponentFixture<ServiceEtudeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceEtudeFormComponent]
    });
    fixture = TestBed.createComponent(ServiceEtudeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
