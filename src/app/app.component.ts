import { Component } from '@angular/core';
// import { Chart, registerables } from 'chart.js';
// import { Subscription } from 'rxjs';
import { DataServService } from './shared/service/data-serv.service';
// Chart.register(...registerables);
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
export class AppComponent {
  // responseData$: Subscription;

  constructor(private dataServ: DataServService) { 
   
  }

  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  /**chart section starts */

  ngOnInit(): void {
    // this.renderChart()
    // this.dataServ.getChartData()
    // .subscribe((response)=>{
    //   console.log(response);
    // });
  }

  // getChartElement(){
  //   let canvas:any = document.getElementById('myChart');
  //   if(canvas){
  //     let ctx:any = canvas.getContext('2d');
  //     return ctx
  //   }
  // }
  /**
   *  renderChart function will load the chart data
   */
  // renderChart() {
  //   const myChart = new Chart(this.getChartElement(), {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           'red',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1,
  //         hoverOffset: 4
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }
}