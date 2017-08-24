require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
let By= webdriver.By();
driver.get('http://114.141.166.21:18003/qfii/KJAF2/html/frame/login.htm');
driver.findElement(By.id('form1_user')).sendKeys('8888');
driver.findElement(By.id('form1_textPassword')).click();
driver.findElement(By.id('form1_password')).sendKeys('1');
driver.findElement(By.xpath('//*[@id="kui-3"]/ul/li[3]')).click();
driver.findElement(By.xpath('//*[@id="kui-11"]/div[2]/table/tbody/tr/td[1]/div/div[3]/div[1]')).click();
driver.findElement(By.id('kui-17_tree_1_span')).click();
driver.switchTo().frame('ui-frame-main-frameTab_tabContent_0').then(function(){
    driver.findElement(By.xpath('//*[@id="kui-6"]/div[2]')).click(); 
})

