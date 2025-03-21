import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from '../../../services/commentaire.service';
import { Commentaire } from '../../../../core/models/commentaire';

@Component({
  selector: 'app-commentaire-form',
  templateUrl: './commentaire-form.component.html',
  styleUrls: ['./commentaire-form.component.css'],
})
export class CommentaireFormComponent implements OnInit {
  commentaire: Commentaire = {
    id: null,
    contenu: '',
    datePublication: new Date(),
    user: { id: 0 },
    serviceEtude: { id: 0 },
  };
  isEditMode = false;

  constructor(
    private commentaireService: CommentaireService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.commentaireService.getCommentaireById(id).subscribe({
        next: (data) => {
          this.commentaire = data;
        },
        error: (err) => {
          console.error('Failed to load commentaire:', err);
        },
      });
    }
  }

  saveCommentaire(): void {
    if (this.isEditMode) {
      this.commentaireService.updateCommentaire(this.commentaire.id!, this.commentaire).subscribe({
        next: () => {
          this.router.navigate(['/commentaires']);
        },
        error: (err) => {
          console.error('Failed to update commentaire:', err.error);
        },
      });
    } else {
      this.commentaireService.addCommentaire(this.commentaire).subscribe({
        next: () => {
          this.router.navigate(['/commentaires']);
        },
        error: (err) => {
          console.error('Failed to add commentaire:', err.error);
        },
      });
    }
  }
}