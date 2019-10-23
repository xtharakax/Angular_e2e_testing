import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Test Product App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should validate title of the home page', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Cambio Products');
  });

  it('should insert a product to product list', () => {
    page.navigateTo();
    // set values to test boxes
    page.getProductTextbox().sendKeys('Arshantha');
    page.getProductAmountTextBox().sendKeys(400);
    // perform click
    page.getProductSubmitButton().click();
    // validation
    expect(page.getProductListElement()).toEqual('Arshantha : 400');
    browser.pause();
  });

  it('should find the form with product details', () => {
    page.navigateTo();
    page.getPricingButton().click();
    expect(page.getPricingWindowTitle()).toEqual('Hello !!!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
