require("chromedriver");
var webdriver=require('selenium-webdriver')
var driver =new webdriver.Builder().forBrowser("chrome").build();
driver.get("http://www.baidu.com");
driver.findElement({id:'kw'}).sendKeys('上海地图');
driver.findElement({id:'su'}).click();

