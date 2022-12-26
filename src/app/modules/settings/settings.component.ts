import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  cities: any[]=[]
  selectedCityCode: any;

  constructor() { 
    this.cities = [
      {name: 'CREATE NEW ROLE', icon: 'pi pi-plus'},
      {name: 'Configure branch', icon: 'pi pi-plus'},
      {name: 'Merge Branch', icon: 'pi pi-plus'},
      {name: 'Role Configuration', icon: 'pi pi-plus'},
      {name: 'Create a New User', icon: 'pi pi-plus'},
      {name: 'CONFIGURE Division', icon: 'pi pi-plus'},
      // {name: 'CONFIGURE DATE Range', icon: 'pi pi-plus'},
      // {name: 'CONFIGURE FESTIVAL & YEAR', icon: 'pi pi-plus'},
      // {name: 'CURRENCY SELECTION', icon: 'pi pi-plus'},
    ];
    this.selectedCityCode = this.cities[0].name
  }

  ngOnInit(): void {
  }
  listBoxClick(data:any){
    console.log(data.option);
    this.selectedCityCode = data.option["name"]
  }
}
