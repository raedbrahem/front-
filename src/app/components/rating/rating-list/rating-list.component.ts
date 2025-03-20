import { Component, OnInit } from '@angular/core';
import { RatingEtudeService } from '../../../services/rating-etude.service';
import { RatingEtude } from '../../../../core/models/rating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css'],
})
export class RatingListComponent implements OnInit {
  ratings: RatingEtude[] = [];

  constructor(
    private ratingService: RatingEtudeService,
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    this.loadRatings();
  }

  loadRatings(): void {
    this.ratingService.getAllRatings().subscribe({
      next: (data) => {
        this.ratings = data;
      },
      error: (err) => {
        console.error('Failed to load ratings:', err);
      },
    });
  }

  deleteRating(id: number): void {
    this.ratingService.deleteRating(id).subscribe({
      next: () => {
        this.ratings = this.ratings.filter((rating) => rating.id !== id);
      },
      error: (err) => {
        console.error('Failed to delete rating:', err);
      },
    });
  }

  // Navigate to the edit form with the rating's ID
  editRating(id: number): void {
    this.router.navigate(['/ratings/edit', id]);
  }
}