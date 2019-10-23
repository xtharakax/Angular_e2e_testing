import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .container h5')).getText() as Promise<string>;
  }

  getPricingButton() {
    return element(by.css('app-root .navbar .navbar-nav [routerlink="prodDetail"]')).getWebElement();
  }


  getPricingWindowTitle(){
    return element(by.xpath('/html/body/app-root/ng-component/div/h1')).getText();
  }

  getProductTextbox() {
    return element(by.xpath('//*[@id="product_name"]')).getWebElement();
  }

  getProductAmountTextBox() {
    return element(by.xpath('//*[@id="product_amount"]')).getWebElement();
  }

  getProductSubmitButton() {
    return element(by.xpath('/html/body/app-root/ts-products/div/button')).getWebElement();
  }

  getProductListElement() {
    return element(by.xpath('/html/body/app-root/ts-products/div/div[3]/ul/li')).getText();
  }
}
