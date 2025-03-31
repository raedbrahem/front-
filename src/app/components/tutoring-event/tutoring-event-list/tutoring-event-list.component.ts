// src/app/components/tutoring-event/tutoring-event-list/tutoring-event-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TutoringEventService } from '../../../services/tutoring-event.service';
import { TutoringEvent } from '../../../../core/models/tutoring-event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutoring-event-list',
  templateUrl: './tutoring-event-list.component.html',
  styleUrls: ['./tutoring-event-list.component.css']
})
export class TutoringEventListComponent implements OnInit {
  tutoringEvents: TutoringEvent[] = [];

  constructor(
    private tutoringEventService: TutoringEventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTutoringEvents();
  }

  loadTutoringEvents(): void {
    this.tutoringEventService.getAllTutoringEvents().subscribe({
      next: (data) => {
        this.tutoringEvents = data;
      },
      error: (err) => {
        console.error('Failed to load tutoring events:', err);
      }
    });
  }

  deleteTutoringEvent(id: number): void {
    this.tutoringEventService.deleteTutoringEvent(id).subscribe({
      next: () => {
        this.tutoringEvents = this.tutoringEvents.filter(event => event.id !== id);
      },
      error: (err) => {
        console.error('Failed to delete tutoring event:', err);
      }
    });
  }

  editTutoringEvent(id: number): void {
    this.router.navigate(['/tutoring-events/edit', id]);
  }
}