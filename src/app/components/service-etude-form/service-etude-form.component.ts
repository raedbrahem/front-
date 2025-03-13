import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEtudeService } from '../../services/service-etude.service';
import { ServiceEtude } from '../../../core/models/service_etude';

@Component({
  selector: 'app-service-etude-form',
  templateUrl: './service-etude-form.component.html',
  styleUrls: ['./service-etude-form.component.css']
})
export class ServiceEtudeFormComponent implements OnInit {
  serviceEtude: ServiceEtude = new ServiceEtude();
  id: number | null = null;

  constructor(
    private serviceEtudeService: ServiceEtudeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.serviceEtudeService.getServiceEtudeById(this.id).subscribe((data) => {
        this.serviceEtude = data;
      });
    }
  }

  save(): void {
    if (this.id) {
      this.serviceEtudeService.updateServiceEtude(this.id, this.serviceEtude).subscribe(() => {
        this.router.navigate(['/servicetude']);
      });
    } else {
      this.serviceEtudeService.createServiceEtude(this.serviceEtude).subscribe(() => {
        this.router.navigate(['/servicetude']);
      });
    }
  }
}
