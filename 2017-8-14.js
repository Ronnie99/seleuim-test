require("chromedriver");
var webdriver=require('selenium-webdriver');
var driver =new webdriver.Builder().forBrowser("chrome").build();
let By=webdriver.By;
driver.get('http://114.141.166.21:18003/qfii/KJAF2/html/frame/login.htm');
driver.sleep(10*1000);
driver.findElement(By.id('form1_user')).sendKeys('8888');
driver.findElement(By.css('#form1_textPassword')).sendKeys('1');
driver.findElement(By.id('form1_ok')).click();