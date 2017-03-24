// utils.js
var waitTime = 30000;
module.exports = function (browser) {
  this.goToSite = function () {
    browser
      .windowMaximize()
      .url('http://google.com')
      .waitForElementVisible('body', waitTime)
      .assert.title('Google')
      .setValue('#lst-ib', 'sachin Girish')
      .pause(1000)
      .waitForElementVisible('[name=btnG]', waitTime)
      .click('[name=btnG]')
    return browser;
  };
  this.mainLogo = function () {
    browser
      .pause(1000)
      .waitForElementVisible('h3>a', waitTime)
      .click('h3>a')
      .pause(2000)
      .waitForElementVisible('.content>h3>a', waitTime)
      .click('.content>h3>a')
      .saveScreenshot('./screenshots/iamfeelingLucky.png')
      .pause(2000)
    return browser;
  };

  return this;
};

