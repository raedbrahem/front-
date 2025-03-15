import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private apiUrl = 'http://localhost:8089/api/statistics'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Get average rating per tutor
  getAverageRatingPerTutor(): Observable<Map<number, number>> {
    return this.http.get<Map<number, number>>(`${this.apiUrl}/average-rating-per-tutor`);
  }

  // Get number of sessions per tutor
  getNumberOfSessionsPerTutor(): Observable<Map<number, number>> {
    return this.http.get<Map<number, number>>(`${this.apiUrl}/number-of-sessions-per-tutor`);
  }

  // Get total hours per tutor
  getTotalHoursPerTutor(): Observable<Map<number, number>> {
    return this.http.get<Map<number, number>>(`${this.apiUrl}/total-hours-per-tutor`);
  }

  // Get most popular subjects
  getMostPopularSubjects(): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(`${this.apiUrl}/most-popular-subjects`);
  }

  // Get busiest times
  getBusiestTimes(): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(`${this.apiUrl}/busiest-times`);
  }
}