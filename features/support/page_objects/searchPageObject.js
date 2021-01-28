class searchPageObject {
  constructor(page) {
    this.page = page;
  }

  selectors = {
    searchField: '[name="q"]',
    luckyButton: '[name="btnI"]',
  };

  async enterText(text) {
    await this.page.waitForSelector(this.selectors.searchField);
    await this.page.type(this.selectors.searchField, text);
  }

  async clickLucky() {
    await Promise.all([
      this.page.waitForNavigation(),
      await this.page.evaluate((button) => {
        document.querySelector(button).click();
      }, this.selectors.luckyButton),
    ]);
  }

  async getPageTitle() {
    var title = await this.page.title();
    return title;
  }
}

module.exports = searchPageObject;
