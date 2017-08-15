require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;
var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
driver.findElement(By.css('#kw')).sendKeys('百度地图');
driver.findElement(By.id('su')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="1"]/h3/a[1]/em')).click();
driver.sleep(8000)
driver.findElement(By.id('sole-input')).sendKeys('上海市崇明岛');