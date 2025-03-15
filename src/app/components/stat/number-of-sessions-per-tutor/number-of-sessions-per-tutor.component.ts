import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../../services/statistics.service';

@Component({
  selector: 'app-number-of-sessions-per-tutor',
  templateUrl: './number-of-sessions-per-tutor.component.html',
  styleUrls: ['./number-of-sessions-per-tutor.component.css']
})
export class NumberOfSessionsPerTutorComponent implements OnInit {
  sessionsPerTutor: Map<number, number> = new Map();

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.loadSessionsPerTutor();
  }

  loadSessionsPerTutor(): void {
    this.statisticsService.getNumberOfSessionsPerTutor().subscribe(
      data => {
        this.sessionsPerTutor = new Map(Object.entries(data).map(([key, value]) => [Number(key), value]));
      },
      error => {
        console.error('Error fetching sessions per tutor:', error);
      }
    );
  }
}