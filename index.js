require("chromedriver");
var webdriver=require('selenium-webdriver');
var driver =new webdriver.Builder().forBrowser("chrome").build();
driver.get("http://www.baidu.com");
driver.findElement({id:'kw'}).sendKeys('上海地图');
driver.findElement({id:'su'}).click();
driver.sleep(10*1000);//等待10秒
driver.findElement({css:' div > div.c-span12.c-span-last > form > p:nth-child(6) > span > input'}).sendKeys('御桥');
driver.findElement({css:' div > div.c-span12.c-span-last > form > p.c-gap-top.op-mapcity-btm > a'}).click();

