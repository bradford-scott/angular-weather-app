import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getSearchByCityHeaderText() {
    return element(by.xpath('//form[1]/div[1]/h5')).getText() as Promise<string>;
  }

  performSearchByCity() {
    element(by.id('weatherLocationByCity')).sendKeys('St. Louis');
    return element(by.xpath('//form[1]/div[2]/button')).click();
  }

  getCityInformation() {
    return element(by.xpath('//div[2]/div/p[6]')).getText() as Promise<string>;
  }

  getCountryInformation() {
    return element(by.xpath('//div[2]/div/p[7]')).getText() as Promise<string>;
  }
}
