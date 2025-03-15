import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../../services/statistics.service';

@Component({
  selector: 'app-total-hours-per-tutor',
  templateUrl: './total-hours-per-tutor.component.html',
  styleUrls: ['./total-hours-per-tutor.component.css']
})
export class TotalHoursPerTutorComponent implements OnInit {
  totalHoursPerTutor: Map<number, number> = new Map();

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.loadTotalHoursPerTutor();
  }

  loadTotalHoursPerTutor(): void {
    this.statisticsService.getTotalHoursPerTutor().subscribe(
      data => {
        this.totalHoursPerTutor = new Map(Object.entries(data).map(([key, value]) => [Number(key), value]));
      },
      error => {
        console.error('Error fetching total hours per tutor:', error);
      }
    );
  }
}