require("chromedriver");
var webdriver=require('selenium-webdriver');
var driver =new webdriver.Builder().forBrowser("chrome").build();
let By=webdriver.By;
//driver.get('file:///D:/Auto-test/testcode/seleuim-test/index.html');
//driver.sleep(3*1000);
//driver.findElement(By.id('phoneIpt')).sendKeys('18516578531');
//driver.findElement(By.id('smsIpt')).sendkeys(2232);
//driver.findElement(By.id('form1_password')).sendKeys('1');
//driver.findElement(By.id('form1_ok')).click();
//driver.findElement(By.xpath('#kui-3 > ul > li.kui-inline-block.kui-navkjax-1-current')).click();
//driver.findElement(By.xpath('//*[@id="kui-11"]/div[2]/table/tbody/tr/td[1]/div/div[3]/div[2]')).click();
//driver.findElement(By.id('kui-16_tree_2_span')).click();
//driver.sleep(2000)
//driver.switchTo().alert().accept();
driver.get('https://www.baidu.com/')
driver.manage().window().maximize();
driver.actions().mouseMove(driver.findElement(By.name('tj_briicon'))).perform();
driver.findElement(By.name('tj_mp3')).click();
driver.sleep(3000);
driver.navigate().refresh();//刷新
driver.sleep(3000);
driver.navigate().back();//后退
driver.navigate().forward();//前进
driver.close();//关闭当前页
driver.sleep(2000);
driver.quit();//退出浏览器