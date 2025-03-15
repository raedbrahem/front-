import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../../services/statistics.service';

@Component({
  selector: 'app-most-popular-subjects',
  templateUrl: './most-popular-subjects.component.html',
  styleUrls: ['./most-popular-subjects.component.css']
})
export class MostPopularSubjectsComponent implements OnInit {
  popularSubjects: Map<string, number> = new Map();

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.loadMostPopularSubjects();
  }

  loadMostPopularSubjects(): void {
    this.statisticsService.getMostPopularSubjects().subscribe(
      data => {
        this.popularSubjects = new Map(Object.entries(data));
      },
      error => {
        console.error('Error fetching most popular subjects:', error);
      }
    );
  }
}