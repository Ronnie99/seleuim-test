require("chromedriver");
var webdriver=require('selenium-webdriver');
let driver =new webdriver.Builder().forBrowser("chrome").build();

let By =webdriver.By;
driver.get('http://www.baidu.com');
driver.findElement({id:'kw'}).sendKeys('上海地图');//搜索上海地图
driver.findElement(By.id('su')).click();
driver.sleep(5*1000);
driver.findElement(By.css('div > div.c-span12.c-span-last > form > p:nth-child(6) > span > input')).sendKeys('御桥');
driver.findElement(By.css('div > div.c-span12.c-span-last > form > p.c-gap-top.op-mapcity-btm > a')).click();
driver.findElement(By.xpath('//*[@id="card-1"]/div/ul/li[1]/div[1]/div[2]/div[1]')).click();
//driver.findElements(By.xpath('//*[@id="route-go"]/span[2]')).click();
//driver.findElement(By.xpath('//*[@id="route-searchbox-content"]/div[2]/div/div[2]/div[1]/input')).sendKeys('金海路地铁站');
//driver.findElement(By.id('search-button')).click();
//driver.findElement(By.xpath('//*[@id="scheme_0"]/div[1]')).click();
//driver.findElement(By.xpath('//*[@id="card-3"]/div[2]/div[1]/span/span[2]')).click();

