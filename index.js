require("chromedriver");
var webdriver=require('selenium-webdriver');
var driver =new webdriver.Builder().forBrowser("chrome").build();
driver.get("http://www.baidu.com");
driver.findElement({id:'kw'}).sendKeys('上海地图');//搜索上海地图
driver.findElement({id:'su'}).click();
driver.sleep(5*1000);//等待10秒
driver.findElement({css:' div > div.c-span12.c-span-last > form > p:nth-child(6) > span > input'}).sendKeys('御桥');//搜索御桥
driver.findElement({css:'div > div.c-span12.c-span-last > form > p.c-gap-top.op-mapcity-btm > a'}).click();
driver.findElement({class:' n-blue'}).click();
driver.findElement({css:' #route-go'}).click();
driver.findElement({css:'div.routebox > div > div.routebox-inputs > div.routebox-input.route-start > input'}).sendKeys('上海站地铁站')
driver.findElement({id:'search-button'}).click();
driver.findElement({css:'tr:nth-child(1) > td:nth-child(2) > a'}).click();    
driver.findElement({css:' tr:nth-child(1) > td:nth-child(3) > div'}).click();