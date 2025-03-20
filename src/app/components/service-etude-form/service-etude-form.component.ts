import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEtudeService } from '../../services/service-etude.service';
import { ServiceEtude } from '../../../core/models/service_etude';
import { UserService } from '../../services/user.service'; // Add UserService
import { Role, User } from '../../../core/models/user'; // Add User model

@Component({
  selector: 'app-service-etude-form',
  templateUrl: './service-etude-form.component.html',
  styleUrls: ['./service-etude-form.component.css'],
})
export class ServiceEtudeFormComponent implements OnInit {
  serviceEtude: ServiceEtude = {
    id: null, // Allowed because id can be number | null
    subject: '',
    description: '',
    tutor:{ id: 0},
    publicationDate: null, // Allowed because publicationDate can be Date | null
    commentaires: [],
    ratings: [],
    clients: [],
    tutoringEvents: [],
  };
  id: number | null = null;
  tutors: User[] = []; // List of tutors for the dropdown

  constructor(
    private serviceEtudeService: ServiceEtudeService,
    private userService: UserService, // Inject UserService
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 /*
    // Fetch tutors for the dropdown
    this.userService.getTutors().subscribe({
      next: (data) => {
        this.tutors = data;
      },
      error: (err) => {
        console.error('Failed to load tutors:', err);
      },
    });*/

    // If editing, load the existing service étude
    if (this.id) {
      this.serviceEtudeService.getServiceEtudeById(this.id).subscribe({
        next: (data) => {
          this.serviceEtude = data;
        },
        error: (err) => {
          console.error('Failed to load service étude:', err);
        },
      });
    }
  }

  save(): void {
    if (this.id) {
      // Update existing service étude
      this.serviceEtudeService.updateServiceEtude(this.id, this.serviceEtude).subscribe({
        next: () => {
          this.router.navigate(['/servicetude']);
        },
        error: (err) => {
          console.error('Failed to update service étude:', err);
        },
      });
    } else {
      // Create new service étude
      this.serviceEtudeService.createServiceEtude(this.serviceEtude).subscribe({
        next: () => {
          this.router.navigate(['/servicetude']);
        },
        error: (err) => {
          console.error('Failed to create service étude:', err);
        },
      });
    }
  }
}