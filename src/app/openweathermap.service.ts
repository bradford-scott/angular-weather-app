import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  apiKey = 'cf002751564a4c78f5f7ed479f1b9ba3';

  constructor(private http: HttpClient) { }
  getWeather(locationByCity) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/find?q='
      + locationByCity +
      '&units=imperial&appid=' + this.apiKey
    );
  }

  getWeatherByCityAndCountry(locationByCityAndCountry) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/find?q='
      + locationByCityAndCountry +
      '&units=imperial&appid=' + this.apiKey
    );
  }

  getWeatherByZipAndCountry(values) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?zip=' + values.locationByZip + ',' + values.locationByCountry +
      '&units=imperial&appid=' + this.apiKey
    );
  }

  getWeatherByLatAndLon(values) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=' + values.locationByLat + '&lon=' + values.locationByLon +
      '&units=imperial&appid=' + this.apiKey
    );
  }
}
