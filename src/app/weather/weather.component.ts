import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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

  websiteList: any = ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG',
    'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BH', 'BS', 'BD', 'BB', 'BY', 'BE', 'BZ',
    'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF',
    'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO',
    'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CW', 'CY', 'CZ', 'DK', 'DJ',
    'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI',
    'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD',
    'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU',
    'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO',
    'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY',
    'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ',
    'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM',
    'NA', 'NR', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO',
    'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR',
    'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS',
    'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO',
    'ZA', 'GS', 'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW',
    'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT' , 'TN', 'TR', 'TM', 'TC', 'TV',
    'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI',
    'WF', 'EH', 'YE', 'ZM', 'ZW'];

  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

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
