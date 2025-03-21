import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireFormComponent } from './commentaire-form.component';

describe('CommentaireFormComponent', () => {
  let component: CommentaireFormComponent;
  let fixture: ComponentFixture<CommentaireFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentaireFormComponent]
    });
    fixture = TestBed.createComponent(CommentaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
