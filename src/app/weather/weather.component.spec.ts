import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { OpenweathermapService } from '../openweathermap.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let openWeatherMapServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ WeatherComponent ],
      providers: [
        {
          provide: OpenweathermapService, useValue: {
            getWeather: () => {},
            getWeatherByCityAndCountry: () => {}
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    openWeatherMapServiceSpy = TestBed.get(OpenweathermapService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('sendCityToOpenWeatherMap', () => {
    it('should make a call to openWeatherMapService getWeather function, submit locationByCity and retrieve weatherData',
      () => {

      spyOn(openWeatherMapServiceSpy, 'getWeather').and.returnValue({ subscribe: () => {}});
      component.sendCityToOpenWeatherMap( { locationByCity: 'STL' });
      expect(openWeatherMapServiceSpy.getWeather).toHaveBeenCalledWith('STL');
    });
  });

  describe('sendCityCountryToOpenWeatherMap', () => {
    it('should make a call to openWeatherMapService getWeatherByCityAndCountry function, submit locationByCityAndCountry' +
      ' and retrieve weatherData', () => {

      spyOn(openWeatherMapServiceSpy, 'getWeatherByCityAndCountry').and.returnValue({ subscribe: () => {}});
      component.sendCityCountryToOpenWeatherMap( { locationByCityAndCountry: 'Lincoln, IL' });
      expect(openWeatherMapServiceSpy.getWeatherByCityAndCountry).toHaveBeenCalledWith('Lincoln, IL');
    });
  });
});
