require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;
var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
driver.manage().window().maximize();
driver.findElement(By.css('#kw')).sendKeys('百度地图');
driver.findElement(By.id('su')).click();
driver.sleep(5000);
driver.findElement(By.xpath('//*[@id="1"]/div[1]/div/div[2]/div[2]/div/div[1]/form/a')).click();
driver.sleep(5000);
driver.getAllWindowHandles().then(function(allwindows){ 
    driver.switchTo().window(allwindows[1]).then(function(){
        driver.findElement(By.id('sole-input')).sendKeys('御桥')
        driver.findElement(By.id('search-button')).click();
        driver.sleep(3000);
        driver.findElement(By.xpath('//*[@id="card-1"]/div/ul/li[1]/div[1]/div[2]/div[2]')).click();
        driver.sleep(3000);
        driver.findElement(By.css('#route-go')).click();
        driver.findElement(By.className('route-start-input')).sendKeys('来安路685');
        driver.sleep(2000);
        driver.findElement(By.xpath('//*[@id="ui3-suggest-scroll"]/ul/li[6]')).click();
        driver.sleep(2000);
        driver.findElement(By.id('search-button')).click();
        driver.sleep(2000);
        driver.findElement(By.xpath('//*[@id="card-4"]/div[2]/div[1]/span')).click();
        driver.sleep(3000);
        driver.findElement(By.xpath('//*[@id="sms_tab_phone"]')).click();
        driver.findElement(By.id('message_phone_number')).sendKeys('18939726078');
    })
})

