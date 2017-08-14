require('chromedriver')
var webdriver = require('selenium-webdriver')


//openbrowser('http://www.baidu.com')
//openbrowser('http://www.bing.com')
let url = "http://baidu.com"
if (url == "http://baidu.com") {

    for (var i = 0; i < 100; i++) {
        const driver = new webdriver.Builder().forBrowser('chrome').build();
        function openbrowser(url) {
            driver.get(url);
        }
        openbrowser(url);
    }
} else {
    console.log("url error")
}