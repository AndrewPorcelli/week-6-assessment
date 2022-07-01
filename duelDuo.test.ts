import { Builder, Capabilities, By } from 'selenium-webdriver';

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get('http://localhost:3000/');
});

afterEach(async () => {
  await driver.sleep(3000);
});

afterAll(async () => {
  driver.quit();
});

test('Title shows up when page loads', async () => {
  const title = await driver.findElement(By.id('title'));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test('clicking draw button displays the div id choices', async () => {
  await driver.findElement(By.id('draw')).click();

  const choices = await driver.findElement(By.id('choices'));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});

test('clicking an Add to Duo displays the div player duo', async () => {
  await driver.findElement(By.xpath('//section/div'));

  await driver.findElement(By.xpath('//button')).click()

  //will come back to figure it out. taken 45 minutes alone for this one.
});
