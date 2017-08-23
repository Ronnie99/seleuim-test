require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
let By= driver.By();
driver.get('http://114.141.166.21:18003/qfii/KJAF2/html/frame/login.htm');
driver.findElement(By.id('form1_user')).sendKeys('8888');
driver.findElement(By.id('form1_textPassword')).click();
driver.findElement(By.id('form1_password')).sendKeys('1');
