import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEtudeService } from '../../services/service-etude.service';
import { ServiceEtude } from '../../../core/models/service_etude';

@Component({
  selector: 'app-service-etude-detail',
  templateUrl: './service-etude-detail.component.html',
  styleUrls: ['./service-etude-detail.component.css']
})
export class ServiceEtudeDetailComponent implements OnInit {
  serviceEtude: ServiceEtude | null = null;
  id: number | null = null;

  constructor(
    private serviceEtudeService: ServiceEtudeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    if (this.id) {
      this.serviceEtudeService.getServiceEtudeById(this.id).subscribe((data) => {
        this.serviceEtude = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/servicetude']);
  }
}
