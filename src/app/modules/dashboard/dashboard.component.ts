import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      { 
        "data": [0, 30, 20, 40, 35, 45, 33, 0, 0],
        "label": "Bar 1", 
        "backgroundColor": 'rgba(148,159,177,0.2)',
        "borderColor": '#009688',
        "pointBackgroundColor": '#009688',
        "pointBorderColor": '#009688',
        "pointHoverBackgroundColor": '#009688',
        "pointHoverBorderColor": '#009688',
      },
      { "data": [0, 50, 60, 55, 59, 30, 40], "label": "Bar 2", "pointBorderColor": '#009688' },
    ],
    labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        display: false,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      },
    },
    // elements: {
    //   point: {
    //     radius: 1
    //   },
    // },

    plugins: {
      legend: { display: true },
    }
  };
  public lineChartType: ChartType = 'line';
  constructor() { }

  ngOnInit(): void {
  }

}
