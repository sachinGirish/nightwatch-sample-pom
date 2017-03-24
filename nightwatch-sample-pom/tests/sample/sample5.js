const mypage=require('../pages/basicElements.js')
module.exports={

    'demoTest':function(browser){
        browser
        .url('http://toolsqa.com/automation-practice-form/')
        .useXpath()
        .waitForElementVisible(mypage.Elements.personalInfo.firstName,7000)
        .setValue(mypage.Elements.personalInfo.firstName,'Chidambara')
        .setValue(mypage.Elements.personalInfo.lastName,'M R')
        .click(mypage.Elements.personalInfo.sex)
        .click(mypage.Elements.professionalInfo.yearsOfExperience)
        .setValue(mypage.Elements.professionalInfo.datePicker,'01-02-1988')
        .click(mypage.Elements.professionalInfo.professionManual)
        .click(mypage.Elements.professionalInfo.professionalAutomation)
        
        .pause(3000)
        // .click(".//*[@id='photo']")
        .setValue(mypage.Elements.uploadFile.browse, require('path').resolve('//Desktop/Untitled.png'))
        .pause(7000)
        //.waitForElementVisible('//*[text()="Untitled.png"')
        .click(mypage.Elements.skills.tool)
        .execute(mypage.Elements.skills.continent)
        .execute(mypage.Elements.skills.seleniumCommands)
        // .click('//*[@class="control-group"]/a[2]')
        // .pause(3000)
        // .assert.title('Demo Table for practicing Selenium Automation')
        // .back()
        // .waitForElementVisible('//*[@name="firstname"]',1000)
        .click(mypage.Elements.button.submit)
        // .pause(3000)
        
        // .assert.urlEquals('http://toolsqa.com/automation-practice-form/?firstname=&lastname=&photo=&continents=Asia&submit=')
        //.click('//select[@id="continents"] option[2]')
        
        .pause(3000)
        .end()
    }
    // reporter : function(results, done) {
    // console.log(results);
    // done();
  
}