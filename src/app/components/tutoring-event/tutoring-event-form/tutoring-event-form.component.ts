// src/app/components/tutoring-event/tutoring-event-form/tutoring-event-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutoringEventService } from '../../../services/tutoring-event.service';
import { TutoringEvent } from '../../../../core/models/tutoring-event';

@Component({
  selector: 'app-tutoring-event-form',
  templateUrl: './tutoring-event-form.component.html',
  styleUrls: ['./tutoring-event-form.component.css']
})
export class TutoringEventFormComponent implements OnInit {
  tutoringEvent: TutoringEvent = new TutoringEvent({
    id: null,
    title: '',
    startTime: '',
    endTime: '',
    status: 'SCHEDULED',
    student: { id: 0 },
    serviceEtude: { id: 0 }, // Initialize with default
    price: 0
  });
  isEditMode = false;

  constructor(
    private tutoringEventService: TutoringEventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.tutoringEventService.getTutoringEventById(id).subscribe({
        next: (data) => {
          this.tutoringEvent = data;
        },
        error: (err) => {
          console.error('Failed to load tutoring event:', err);
        }
      });
    }
  }

  saveTutoringEvent(): void {
    if (this.isEditMode) {
      this.tutoringEventService.updateTutoringEvent(this.tutoringEvent.id!, this.tutoringEvent).subscribe({
        next: () => {
          this.router.navigate(['/tutoring-events']);
        },
        error: (err) => {
          console.error('Failed to update tutoring event:', err.error);
        }
      });
    } else {
      this.tutoringEventService.addTutoringEvent(this.tutoringEvent).subscribe({
        next: () => {
          this.router.navigate(['/tutoring-events']);
        },
        error: (err) => {
          console.error('Failed to add tutoring event:', err.error);
        }
      });
    }
  }
}