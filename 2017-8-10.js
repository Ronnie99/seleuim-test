require("chromedriver");
var webdriver=require('selenium-webdriver');
let driver =new webdriver.Builder().forBrowser("chrome").build();

let By =webdriver.By;
driver.get('http://www.baidu.com');
driver.findElement({id:'kw'}).sendKeys('上海地图');//搜索上海地图
driver.findElement(By.id('su')).click();
driver.findElement(By.css('div.c-span12.c-span-last > form > p:nth-child(6) > span > input')).sendKeys('御桥');
driver.findElement(By.css('div.c-span12.c-span-last > form > p.c-gap-top.op-mapcity-btm > a')).click();
driver.findElement(By.className('n-blue')).click();
