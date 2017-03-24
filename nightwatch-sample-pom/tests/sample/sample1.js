module.exports={

    'demoTest':function(browser){
        browser
        .url('https://fineuploader.com/demos.html')
        .useXpath()
        .setValue('//*[@id="fine-uploader-gallery"]/div/div[3]/input', require('path').resolve('//Desktop/Untitled.png'))

    }}