require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;
var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
driver.manage().window().maximize();
driver.findElement(By.css('#kw')).sendKeys('百度地图');
driver.findElement(By.id('su')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="1"]/div[1]/div/div[2]/div[2]/div/div[1]/form/a')).click();
driver.sleep(5000);
driver.getAllWindowHandles().then(function(allwindows){   
    driver.switchTo().window(allwindows[1]).then(function(){ 
        driver.findElement(By.id('sole-input')).sendKeys('御桥')
        eriver.findElement(By.id('search-button')).click();
        driver.sleep(3000);
        driver.findElement(By.css('#card-1 > div > ul > li.search-item.bus-stop-item > div.cf')).click();
        driver.findElement(By.xpath('//*[@id="route-go"]/span[2]')).click();
    })
})

