import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceEtude } from '../../core/models/service_etude';

@Injectable({
  providedIn: 'root'
})
export class ServiceEtudeService {
  private apiUrl = 'http://localhost:3000/serviceEtudes';

  constructor(private http: HttpClient) {}
  getAllServiceEtudes(): Observable<ServiceEtude[]> {
    return this.http.get<ServiceEtude[]>(this.apiUrl);
  }
  getServiceEtudeById(id: number): Observable<ServiceEtude> {
    return this.http.get<ServiceEtude>(`${this.apiUrl}/${id}`);
  }

  createServiceEtude(serviceEtude: ServiceEtude): Observable<ServiceEtude> {
    return this.http.post<ServiceEtude>(this.apiUrl, serviceEtude);
  }

  // ✅ Update: Modify an existing service etude
  updateServiceEtude(id: number, serviceEtude: ServiceEtude): Observable<ServiceEtude> {
    return this.http.put<ServiceEtude>(`${this.apiUrl}/${id}`, serviceEtude);
  }

  // ✅ Delete: Remove a service etude
  deleteServiceEtude(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
