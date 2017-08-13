require("chromedriver");
var webdriver=require('selenium-webdriver');
var driver =new webdriver.Builder().forBrowser("chrome").build();
let By=webdriver.By
driver.get("http://www.baidu.com");
driver.findElement(By.xpath('//*[@id="kw"]')).sendKeys('上海地图');//搜索上海地图
driver.findElement({className:'bg'}).click();
driver.sleep(2*1000);//等待10秒
driver.findElement({css:' div > div.c-span12.c-span-last > form > p:nth-child(6) > span > input'}).sendKeys('御桥');//搜索御桥
driver.findElement({css:'div > div.c-span12.c-span-last > form > p.c-gap-top.op-mapcity-btm > a'}).click();
driver.sleep(2*1000);
driver.findElement(By.id('search-button')).click();
//driver.findElement(By.xpath('//*[@id="card-2"]/div/ul/li[1]')).click()
