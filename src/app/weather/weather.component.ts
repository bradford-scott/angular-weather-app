import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OpenweathermapService} from '../openweathermap.service';

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

    this.zipCountryForm = new FormGroup({
      locationByZip: new FormControl(''),
      locationByCountry: new FormControl(this.zipCountryForm, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ])
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
    this.cityCountryWeatherSearch.reset();
  }

  sendZipAndCountryToOpenWeatherMap(formValues) {
    this.openweathermapService
      .getWeatherByZipAndCountry(formValues.value)
      .subscribe(data => this.weatherData = data);
    this.zipCountryForm.reset();
  }

  sendLatAndLonToOpenWeatherMap(formValues) {
    this.openweathermapService
      .getWeatherByLatAndLon(formValues.value)
      .subscribe(data => this.weatherData = data);
    this.latAndLonForm.reset();
  }
}
