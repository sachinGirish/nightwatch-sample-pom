module.exports={

    'test window handler': function(browser){
        browser
        .url('http://toolsqa.com/')
        .useXpath()
        .waitForElementVisible('//*[text()="DEMO SITES"]',1000)
        .click('//*[text()="DEMO SITES"]')
        .pause(3000)
        .click('//*[text()="Automation Practice Switch Windows"]')
        .pause(3000)
        .waitForElementVisible('.//*[@id="content"]/h1',1000)
        .pause(3000)
        ////////////////////////////New Browser Window/////////////////////////
        // .click('.//*[@id="button1"]')
        // .pause(3000)
        // .windowHandles(function(result) {
        //     var newWindow;
        //     var orgWindow;
        //     this.verify.equal(result.value.length, 2, 'There should be 2 windows   open');
        //     newWindow = result.value[1];
        //     orgWindow = result.value[0];
        //     this.switchWindow(newWindow);
        //     this.windowMaximize()
        //     .pause(3000)
        //     this.closeWindow(newWindow)
        //     this.switchWindow(orgWindow)
        // })
        // .click('.//*[text()="New Message Window"]')
        
        ////////////////////////////New Message Window/////////////////////////
        // .click('//*[@id="content"]/p[3]/button')
        // .pause(3000)
        ///////////////////////////New Browser Tab////////////////////////////
        
        // .expect.element('#main').text.to.equal('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.')
        .click('.//*[@id="content"]/p[4]/button')
        // .windowHandles(function(result) {
        //     var newWindow;
        //     var orgWindow;
        //     this.verify.equal(result.value.length, 2, 'There should be 2 windows   open');
        //     newWindow = result.value[1];
        //     orgWindow = result.value[0];
        //     this.switchWindow(newWindow);
        //     console.log(browser.getTitle())
        //     // this.windowMaximize()
        //     // .pause(3000)
        //     // this.closeWindow(newWindow)
        //     // this.switchWindow(orgWindow)
        // })

        .pause(3000)

        .pause(3000)

        .end()
    }
}