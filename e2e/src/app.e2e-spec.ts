import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('neogeo app is running!');
  });
  it('should navigate to book details', () => {
    page.navigateTo();
    page.findElement('app-book-preview:nth-of-type(3) button').click();
    expect(page.getUrl()).toContain('978-1-59327-584-6');
    // browser.takeScreenshot().then(i => )
    browser.sleep(3000);
  });
  it('should drag&drop', () => {
    page.navigateTo();
    const btn = page.findElement('.btn.btn-primary');
    const ul = page.findElement('ul');
    browser
      .actions()
      .dragAndDrop(btn, ul)
      .mouseUp()
      .perform();
    // expect(page.getUrl()).toContain('978-1-59327-584-6');
    // browser.takeScreenshot().then(i => )
    browser.sleep(3000);
  });
  it('should navigate to book New', () => {
    page.navigateTo('/books/new');
    page.findElement('input').sendKeys('ölidfhasöoifh');
    // expect(page.getUrl()).toContain('978-1-59327-584-6');
    browser.sleep(3000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
