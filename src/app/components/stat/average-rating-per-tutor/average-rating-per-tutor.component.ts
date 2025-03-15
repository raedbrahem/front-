import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../../services/statistics.service';

@Component({
  selector: 'app-average-rating-per-tutor',
  templateUrl: './average-rating-per-tutor.component.html',
  styleUrls: ['./average-rating-per-tutor.component.css']
})
export class AverageRatingPerTutorComponent implements OnInit {
  averageRatings: Map<number, number> = new Map();

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.loadAverageRatings();
  }

  loadAverageRatings(): void {
    this.statisticsService.getAverageRatingPerTutor().subscribe(
      data => {
        this.averageRatings = new Map(Object.entries(data).map(([key, value]) => [Number(key), value]));
      },
      error => {
        console.error('Error fetching average ratings:', error);
      }
    );
  }
}