require("chromedriver");
var webdriver = require("selenium-webdriver");
var driver =new webdriver.Builder().forBrowser("chrome").build();

driver.get("http://www.baidu.com");

driver.findElement({id:'kw'}).sendKeys('上海地图');
driver.findElement({css:'#\31 > div > div.c-span12.c-span-last > form > p:nth-child(6) > span > input'}).sendkeys('御桥地铁站');
driver.findElement({css:'#\31 > div.c-border > div > div.c-row > div.c-span18.c-span-last > div > div:nth-child(2) > form > a'}).click();



