require("chromedriver");
var webdriver = require("selenium-webdriver");
var driver =new webdriver.Builder().forBrowser("chrome").build();

driver.get("http://www.baidu.com");

driver.findElement({id:'kw'}).sendKeys('上海地图');
driver.findElement({id:'su'}).click();
driver.findElement({css:'#\31 > div > div.c-span12.c-span-last > form '}).sendKeys('御桥地铁站');
driver.findElement({css:'#\31 > div > div.c-span12.c-span-last > form '}).click();


