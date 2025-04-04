import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingEtudeService } from '../../../services/rating-etude.service';
import { RatingEtude } from '../../../../core/models/rating';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css'],
})
export class RatingFormComponent implements OnInit {
  rating: RatingEtude = {
    id: null,
    stars: 0,
    dateRating: new Date(),
    user: { id: 0},
    serviceEtude: { id: 0}, // Updated to match the new model
  };
  isEditMode = false;

  constructor(
    private ratingService: RatingEtudeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.ratingService.getRatingById(id).subscribe({
        next: (data) => {
          this.rating = data;
        },
        error: (err) => {
          console.error('Failed to load rating:', err);
        },
      });
    }
  }

  saveRating(): void {
    // Format the dateRating to include time (e.g., 'T00:00:00')
    const formattedDate = `${this.rating.dateRating}T00:00:00`;
    this.rating.dateRating = new Date(formattedDate);
  
    console.log('Payload being sent:', this.rating); // Debugging
  
    if (this.isEditMode) {
      this.ratingService.updateRating(this.rating.id!, this.rating).subscribe({
        next: () => {
          this.router.navigate(['/ratings']);
        },
        error: (err) => {
          console.error('Failed to update rating:', err.error); // Log the full error response
        },
      });
    } else {
      this.ratingService.addRating(this.rating).subscribe({
        next: () => {
          this.router.navigate(['/ratings']);
        },
        error: (err) => {
          console.error('Failed to add rating:', err.error); // Log the full error response
        },
      });
    }
  }
}