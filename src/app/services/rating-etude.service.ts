import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RatingEtude } from '../../core/models/rating';

@Injectable({
  providedIn: 'root',
})
export class RatingEtudeService {
  private apiUrl = 'http://localhost:8089/rating'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Add a new rating
  addRating(rating: RatingEtude): Observable<RatingEtude> {
    return this.http.post<RatingEtude>(`${this.apiUrl}/add`, rating);
  }

  // Delete a rating
  deleteRating(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Update a rating
  updateRating(id: number, rating: RatingEtude): Observable<RatingEtude> {
    return this.http.put<RatingEtude>(`${this.apiUrl}/update/${id}`, rating);
  }

  // Get all ratings
  getAllRatings(): Observable<RatingEtude[]> {
    return this.http.get<RatingEtude[]>(`${this.apiUrl}/all`);
  }

  // Get a single rating by ID
  getRatingById(id: number): Observable<RatingEtude> {
    return this.http.get<RatingEtude>(`${this.apiUrl}/retrieve/${id}`);
  }
}