import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getWeatherData(city:String): Observable<any>{
    return this.httpClient.get<any>('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=3b4ae4ce99ff4732cb2198bbee92818c');
  }
}
