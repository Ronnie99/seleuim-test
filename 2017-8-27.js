require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
let fs = require('fs');
let By = webdriver.By;
let path = require('path');
driver.get('http://192.168.21.128:3000/') ;
driver.sleep(2000);
driver.manage().window().maximize();
driver.findElement(By.xpath('/html/body/div[1]/div/div/ul/li[6]/a')).click();//登录
driver.findElement(By.id('name')).sendKeys('ronnie');
driver.findElement(By.id('pass')).sendKeys('123456')
driver.findElement(By.xpath('//*[@id="signin_form"]/div[3]/input')).click();
driver.findElement(By.xpath('//*[@id="create_topic_btn"]/span')).click();//发布话题
driver.sleep(1000);
driver.findElement(By.id('tab-value')).click();
driver.findElement(By.xpath('//*[@id="tab-value"]/option[2]')).click();//选择板块
driver.findElement(By.id('title')).sendKeys('Mongodb修改数据库操作手册');//标题
driver.sleep(2000);
driver.findElement(By.className('editor_buttons')).click();
driver.findElement(By.className('CodeMirror-scroll')).click();
driver.actions().mouseMove(driver.findElement(By.className('CodeMirror-scroll'))).sendKeys('afhcunuanc').perform();

//driver.takeScreenshot().then(function(imagedata){
  //  fs.writeFileSync('jietu.png',imagedata,'base64')
//})
driver.findElement(By.className('eicon-image')).click();
driver.findElement(By.name('file')).sendKeys('D:\\Pictures\\','timg.jpg');//上传图片
driver.findElement(By.xpath('//*[@id="create_topic_form"]/fieldset/div/div/div[4]/input')).click();//提交