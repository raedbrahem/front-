import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role, User } from '../../core/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8089/users'; // Adjust the URL to match your backend

  constructor(private http: HttpClient) {}
  // Fetch all tutors
  getTutors(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/tutors`); // Adjust the endpoint to match your backend
  }
}