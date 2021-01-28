const { When, Then, Given } = require("@cucumber/cucumber");
const expect = require("expect");
const searchPageObject = require("../page_objects/searchPageObject.js");

var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);

Given("I open a Google Chrome Browser", async function () {
  await this.page.setViewport({ width: 1366, height: 768 });
  await this.page.goto("https://google.com");
  searchPage = new searchPageObject(this.page);
});

When("I enter {string} in the search field", async function (text) {
  await searchPage.enterText(text);
});

When("I click the Lucky button", async function () {
  await searchPage.clickLucky();
});

Then("the {string} page is displayed", async function (text) {
  var title = await searchPage.getPageTitle();
  expect(title).toBe(text);
});
