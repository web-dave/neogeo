import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path: string = browser.baseUrl) {
    // browser.driver
    //   .manage()
    //   .window()
    //   .setPosition(300, 1000);
    // browser.sleep(1000);
    // browser.driver
    //   .manage()
    //   .window()
    //   .setPosition(300, 100);
    return browser.get(path) as Promise<any>;
  }

  getUrl() {
    return browser.getCurrentUrl();
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<
      string
    >;
  }

  findElement(selector: string) {
    return element(by.css(selector));
  }
}
