// src/app/services/tutoring-event.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutoringEvent } from '../../core/models/tutoring-event';

@Injectable({
  providedIn: 'root'
})
export class TutoringEventService {
  private apiUrl = 'http://localhost:8089/tutoring-event';

  constructor(private http: HttpClient) { }

  getAllTutoringEvents(): Observable<TutoringEvent[]> {
    return this.http.get<TutoringEvent[]>(`${this.apiUrl}/all`);
  }

  getTutoringEventById(id: number): Observable<TutoringEvent> {
    return this.http.get<TutoringEvent>(`${this.apiUrl}/retrieve/${id}`);
  }

  addTutoringEvent(tutoringEvent: TutoringEvent): Observable<TutoringEvent> {
    return this.http.post<TutoringEvent>(`${this.apiUrl}/add`, tutoringEvent);
  }

  updateTutoringEvent(id: number, tutoringEvent: TutoringEvent): Observable<TutoringEvent> {
    return this.http.put<TutoringEvent>(`${this.apiUrl}/update/${id}`, tutoringEvent);
  }

  deleteTutoringEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}