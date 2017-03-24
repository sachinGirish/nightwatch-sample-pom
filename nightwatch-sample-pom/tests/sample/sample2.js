module.exports={

    'test alerts':function(browser){
        browser
        .url('http://toolsqa.com/')
        .useXpath()
//         .waitForElementVisible('.recommendation', 1000, function () {
//         // moveToElement can also accept offsets
//         browser.moveToElement('.recommendation', 100, 100, function() {
//         browser.waitForElementVisible('.share', 500, function () {
//         browser.click('.share');
//     }, "Click share icon. ");
// });
// }, "Find a recommendation ");
        .pause(2000)
        .click('//*[text()="DEMO SITES"]')
        .pause(2000)
        .click('//*[text()="Handling Alerts using Selenium WebDriver"]')
        .pause(2000)
        .waitForElementVisible('//*[@id="content"]/h1',2000)
        ///////////////////////////////////////Prompt pop up/////////////////////////////
        .click('.//*[text()="Prompt Pop up"]')
        .pause(3000)
        .acceptAlert()
        .click('.//*[text()="Prompt Pop up"]')
        .pause(3000)
        .dismissAlert()
        ///////////////////////////////////////Confirm pop up//////////////////////////
        // .click('.//*[text()="Confirm Pop up"]')
        // .pause(3000)
        // .acceptAlert()
        // .click('.//*[text()="Confirm Pop up"]')
        // .pause(3000)
        // .dismissAlert()
        ///////////////////////////////////////Confirm pop up//////////////////////////
        // .click('.//*[text()="Simple Alert"]')
        // .pause(3000)
        .acceptAlert()
        .end()
    }   
}