import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OpenweathermapService } from '../openweathermap.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public cityWeatherSearch: FormGroup;
  public cityCountryWeatherSearch: FormGroup;
  public latAndLonWeatherSearch: FormGroup;
  public weatherData: any;
  locationByLat: any;
  locationByLon: any;

  constructor(
    private formBuilder: FormBuilder,
    private openweathermapService: OpenweathermapService
  ) {
  }

  ngOnInit() {
    this.cityWeatherSearch = this.formBuilder.group({
      locationByCity: ['']
    });
    this.cityCountryWeatherSearch = this.formBuilder.group({
      locationByCityAndCountry: ['']
    });
    this.latAndLonWeatherSearch = this.formBuilder.group( {
      locationByLat: '',
      locationByLon: ''
    });
  }

  sendCityToOpenWeatherMap(formValues) {
    this.openweathermapService
      .getWeather(formValues.locationByCity)
      .subscribe(data => this.weatherData = data);
    this.cityWeatherSearch.reset();
    console.log(this.weatherData);
  }

  sendCityStateToOpenWeatherMap(formValues) {
    this.openweathermapService
      .getWeatherByCityAndCountry(formValues.locationByCityAndCountry)
      .subscribe(data => this.weatherData = data);
    this.cityCountryWeatherSearch.reset();
    console.log(this.weatherData);
  }

  sendLatAndLonToOpenWeatherMap(locationByLat, locationByLon) {
    this.openweathermapService
      .getWeatherByLatAndLon(locationByLat, locationByLon)
      .subscribe(data => this.weatherData = data);
    this.latAndLonWeatherSearch.reset();
    console.log(this.weatherData);
  }
}
