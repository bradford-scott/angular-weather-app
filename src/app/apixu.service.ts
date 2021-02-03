import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location) {
    return this.http.get(
      // 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=cf002751564a4c78f5f7ed479f1b9ba3'
      'https://api.openweathermap.org/data/2.5/find?q=' + location + '&units=imperial&appid=cf002751564a4c78f5f7ed479f1b9ba3'
    // 'http://api.weatherstack.com/current?access_key=9982b024afa94b22b78b2466f1cadbed&query=' + location
    );
  }
}
