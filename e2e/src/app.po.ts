import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getSearchByCityHeaderText() {
    return element(by.xpath('//form[1]/div[1]/h5')).getText() as Promise<string>;
  }
}
