import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  constructor(private http: HttpClient) { }
  getWeather(locationByCity) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/find?q='
      + locationByCity +
      '&units=imperial&appid=cf002751564a4c78f5f7ed479f1b9ba3'
    );
  }

  getWeatherByCityAndCountry(locationByCityAndCountry) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/find?q='
      + locationByCityAndCountry +
      '&units=imperial&appid=cf002751564a4c78f5f7ed479f1b9ba3'
    );
  }

  getWeatherByLatAndLon(lat, long) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long +
      '&appid=cf002751564a4c78f5f7ed479f1b9ba3'
    );
  }
}
