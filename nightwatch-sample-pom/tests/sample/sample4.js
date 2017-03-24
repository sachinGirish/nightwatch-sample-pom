const mypage=require('../pages/googlePage.js')

module.exports = {
  "Is file avaliable" : function (client) {
    client
    .url('http://20tvni1sjxyh352kld2lslvc.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/Test-File-to-Download.xlsx')
    .pause(7000)
    //.setValue('@enter_path', this.api.Keys.ENTER)
    
        
   .keys(client.keys.DOWN_ARROW)
   .keys(client.keys.ENTER)
    console.log("hi")
    client.pause(3000)
         
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
    client.end();
  }
};

//http://20tvni1sjxyh352kld2lslvc.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/Test-File-to-Download.xlsx