
require('chromedriver');
var webdriver = require('selenium-webdriver');
var By=webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://114.141.166.21:18003/qfii/KJAF2/html/frame/login.htm');
driver.findElement(By.id('form1_user')).sendKeys('8888');
driver.findElement(By.id('form1_textPassword')).click();
driver.findElement(By.id('form1_password')).sendKeys('1');
driver.findElement(By.id('form1_ok')).click();
driver.sleep(6000);
driver.manage().window().maximize();//窗口放大
driver.sleep(3000);
driver.findElement(By.xpath('//*[@id="kui-3"]/ul/li[3]')).click();//点击系统按钮
driver.findElement(By.xpath('//*[@id="kui-11"]/div[2]/table/tbody/tr/td[1]/div/div[3]/div[1]')).click();//点击产品管理
driver.sleep(4000);
driver.findElement(By.id('kui-18_tree_1_span')).click();//点击用户管理
driver.switchTo().frame('ui-frame-main-frameTab_tabContent_1').then(function(){
     driver.findElement(By.css('#kui-6 > div.kui-button-text')).click(); //点击增加按钮
     driver.findElement(By.css('#kui-12')).sendKeys('2343');//用户代码
     driver.findElement(By.xpath('//*[@id="kui-14"]')).sendKeys('2343');//用户别名
     driver.findElement(By.xpath('//*[@id="kui-16"]')).sendKeys('2343');//用户名称
     driver.findElement(By.id('add_orgid_btn')).click();//机构选择
     driver.findElement(By.xpath('//*[@id="add_orgid_list"]/ul/li[5]')).click();
     driver.findElement(By.xpath('//*[@id="kui-20"]')).sendKeys('100');
     driver.findElement(By.id('kui-22_btn')).click();
     driver.findElement(By.css('#kui-22_list > ul > li:nth-child(2)')).click();
     driver.findElement(By.css('#kui-33 > div.kui-button-text')).click();//确认
    })