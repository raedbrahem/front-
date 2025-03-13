import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEtudeDetailComponent } from './service-etude-detail.component';

describe('ServiceEtudeDetailComponent', () => {
  let component: ServiceEtudeDetailComponent;
  let fixture: ComponentFixture<ServiceEtudeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceEtudeDetailComponent]
    });
    fixture = TestBed.createComponent(ServiceEtudeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
