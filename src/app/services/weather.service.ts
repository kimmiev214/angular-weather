import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherData(cityName:string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://open-weather13.p.rapidapi.com/city/'+cityName, {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
      .set('X-RapidAPI-Key', '844577c2fcmsh433f4ae97447db1p1e39bajsn57e79b616137')
    });
   }

}
