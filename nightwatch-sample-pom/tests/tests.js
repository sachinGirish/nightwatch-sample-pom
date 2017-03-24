// tests.js
var GooglePage = require('../tests/googlePage.js');

module.exports = {
  '@tags': ['sampletest'],
  'Open the website': function (browser) {
    GooglePage(browser).goToSite();
    GooglePage(browser).mainLogo();

  }
};
