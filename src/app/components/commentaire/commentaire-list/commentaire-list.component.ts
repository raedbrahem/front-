import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../../../services/commentaire.service';
import { Commentaire } from '../../../../core/models/commentaire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commentaire-list',
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.css'],
})
export class CommentaireListComponent implements OnInit {
  commentaires: Commentaire[] = [];

  constructor(
    private commentaireService: CommentaireService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loadCommentaires();
  }

  loadCommentaires(): void {
    this.commentaireService.getAllCommentaires().subscribe({
      next: (data) => {
        this.commentaires = data;
      },
      error: (err) => {
        console.error('Failed to load commentaires:', err);
      },
    });
  }

  deleteCommentaire(id: number): void {
    this.commentaireService.deleteCommentaire(id).subscribe({
      next: () => {
        this.commentaires = this.commentaires.filter((commentaire) => commentaire.id !== id);
      },
      error: (err) => {
        console.error('Failed to delete commentaire:', err);
      },
    });
  }

  editCommentaire(id: number): void {
    this.router.navigate(['/commentaires/edit', id]);
  }
}