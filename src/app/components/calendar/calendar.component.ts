import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TutoringEvent } from '../../../core/models/tutoring-event'; // Adjust the import path
import { CalendarOptions } from '@fullcalendar/core'; // Import from @fullcalendar/core
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the dayGrid plugin

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin], // Register the dayGrid plugin
    events: []
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTutoringEvents();
  }

  fetchTutoringEvents(): void {
    this.http.get<TutoringEvent[]>('http://localhost:8089/tutoring-event/all').subscribe(
      (events: TutoringEvent[]) => {
        this.calendarOptions.events = events.map(event => ({
          title: event.title,
          start: event.startTime,
          end: event.endTime
        }));
      },
      (error) => {
        console.error('Error fetching tutoring events:', error);
      }
    );
  }
}