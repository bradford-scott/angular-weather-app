import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { OpenweathermapService } from '../openweathermap.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public cityWeatherSearch: FormGroup;
  public cityCountryWeatherSearch: FormGroup;
  public weatherData: any;

  latAndLonForm = new FormGroup({
    locationByLat: new FormControl(''),
    locationByLon: new FormControl(''),
  });

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
  }

  sendCityToOpenWeatherMap(formValues) {
    this.openweathermapService
      .getWeather(formValues.locationByCity)
      .subscribe((data: any) => {
        if (data) {
          this.weatherData = data.list[0];
        }
      });
    console.log(this.weatherData);
    this.cityWeatherSearch.reset();
  }

  sendCityStateToOpenWeatherMap(formValues) {
    this.openweathermapService
      .getWeatherByCityAndCountry(formValues.locationByCityAndCountry)
      .subscribe((data: any) => {
        if (data) {
          this.weatherData = data.list[0];
        }
      });
    console.log(this.weatherData);
    this.cityCountryWeatherSearch.reset();
  }

  sendLatAndLonToOpenWeatherMap(formValues) {
    this.openweathermapService
      .getWeatherByLatAndLon(formValues.value)
      .subscribe(data => this.weatherData = data);
    console.log(this.weatherData);
    this.latAndLonForm.reset();
  }
}
