import { Component, OnInit } from '@angular/core';
import { ServiceEtudeService } from '../../services/service-etude.service';
import { ServiceEtude } from '../../../core/models/service_etude';

@Component({
  selector: 'app-service-etude',
  templateUrl: './service-etude.component.html',
  styleUrls: ['./service-etude.component.css']
})
export class ServiceEtudeComponent implements OnInit {
  serviceEtudes: ServiceEtude[] = [];

  constructor(private serviceEtudeService: ServiceEtudeService) {}

  ngOnInit(): void {
    this.loadServiceEtudes();
  }

  loadServiceEtudes(): void {
    this.serviceEtudeService.getAllServiceEtudes().subscribe((data) => {
      this.serviceEtudes = data;
    });
  }

  deleteServiceEtude(id: number): void {
    if (confirm('Are you sure you want to delete this service?')) {
      this.serviceEtudeService.deleteServiceEtude(id).subscribe(() => {
        this.serviceEtudes = this.serviceEtudes.filter(service => service.id !== id);
      });
    }
  }
}
