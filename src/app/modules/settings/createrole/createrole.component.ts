import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.scss']
})
export class CreateroleComponent implements OnInit {
  cities: City[];

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];  
  }

  ngOnInit(): void {

  }

}
