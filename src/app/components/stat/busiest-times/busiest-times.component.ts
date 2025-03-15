import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../../services/statistics.service';

@Component({
  selector: 'app-busiest-times',
  templateUrl: './busiest-times.component.html',
  styleUrls: ['./busiest-times.component.css']
})
export class BusiestTimesComponent implements OnInit {
  busiestTimes: Map<string, number> = new Map();

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.loadBusiestTimes();
  }

  loadBusiestTimes(): void {
    this.statisticsService.getBusiestTimes().subscribe(
      data => {
        this.busiestTimes = new Map(Object.entries(data));
      },
      error => {
        console.error('Error fetching busiest times:', error);
      }
    );
  }
}