import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display get search by city header', () => {
    page.navigateTo();
    expect(page.getSearchByCityHeaderText()).toEqual('Search for Weather by City:');
  });

  it('should perform search by city and validate a result is displayed', () => {
    page.performSearchByCity();
    expect(page.getCityInformation()).toEqual('City Searched: St. Louis');
    expect(page.getCountryInformation()).toEqual('Country Searched: US');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
