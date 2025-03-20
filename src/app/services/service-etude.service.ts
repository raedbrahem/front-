import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceEtude } from '../../core/models/service_etude';

@Injectable({
  providedIn: 'root',
})
export class ServiceEtudeService {
  private apiUrl = 'http://localhost:8089/service-etude';

  constructor(private http: HttpClient) {}

  // ✅ Get all services
  getAllServiceEtudes(): Observable<ServiceEtude[]> {
    return this.http.get<ServiceEtude[]>(`${this.apiUrl}/all`);
  }

  // ✅ Get a service by ID
  getServiceEtudeById(id: number): Observable<ServiceEtude> {
    return this.http.get<ServiceEtude>(`${this.apiUrl}/retrieve/${id}`);
  }

  // ✅ Create a new service
  createServiceEtude(serviceEtude: ServiceEtude): Observable<ServiceEtude> {
    return this.http.post<ServiceEtude>(`${this.apiUrl}/add`, serviceEtude);
  }

  // ✅ Update an existing service
  updateServiceEtude(id: number, serviceEtude: ServiceEtude): Observable<ServiceEtude> {
    return this.http.put<ServiceEtude>(`${this.apiUrl}/update/${id}`, serviceEtude);
  }

  // ✅ Delete a service
  deleteServiceEtude(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}