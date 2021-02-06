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
  public zipCountryForm: FormGroup;
  public latAndLonForm: FormGroup;
  public weatherData: any;

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

    this.zipCountryForm = new FormGroup( {
      locationByZip: new FormControl(''),
      locationByCountry: new FormControl('')
    });

    this.latAndLonForm = new FormGroup({
      locationByLat: new FormControl(''),
      locationByLon: new FormControl('')
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

  sendCityCountryToOpenWeatherMap(formValues) {
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

  sendZipAndCountryToOpenWeatherMap(formValues) {
    if (formValues.locationByCountry === null || formValues.locationByCountry === '') {
      this.openweathermapService
        .getWeatherByZip(formValues.value)
        .subscribe(data => this.weatherData = data);
    } else {
      this.openweathermapService
        .getWeatherByZipAndCountry(formValues.value)
        .subscribe(data => this.weatherData = data);
    }
    console.log(this.weatherData);
    this.zipCountryForm.reset();
  }

  sendLatAndLonToOpenWeatherMap(formValues) {
    this.openweathermapService
      .getWeatherByLatAndLon(formValues.value)
      .subscribe(data => this.weatherData = data);
    console.log(this.weatherData);
    this.latAndLonForm.reset();
  }
}
