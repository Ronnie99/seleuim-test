require('chromedriver')
var webdriver=require('selenium-webdriver')
const driver =new webdriver.Builder().forBrowser('chrome').build();
function openbrowser(url){
    driver.getCurrentUrl(url);
}
openbrowser('http://www.baidu.com')
openbrowser('http://www.bing.com')