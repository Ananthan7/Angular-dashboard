import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataServService {

  constructor(private http: HttpClient) { 

  } 

  getChartData(){
    // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    // let params = new HttpParams().set('param1', "value1")
    return this.http.get(environment.api_url)
  }
}