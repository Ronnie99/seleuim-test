require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
var mongoClient = require('mongodb').mongoClient;
var assert = require('assert');
const url = 'mongodb://localhost:27017/node_club_dev';
let By = webdriver.By;
let user = new Date().valueOf();
driver.get("http://192.168.21.128:3000/");
driver.findElement(By.css('[href="/signup"]')).click();
driver.findElement(By.id('loginname')).sendKeys('ronnie1')
driver.findElement(By.id('pass')).sendKeys('123456')
driver.findElement(By.id('re_pass')).sendKeys('123456')
driver.findElement(By.id('email')).sendKeys(`${user}@domain.com`)
driver.findElement(By.css('.span-primary')).click().then(function(){
    mongoClient.connect(url,function(err,db){
        assert.equal(null,err);
        console.log('connect correctly to server');
        let collection = db.collection('ronnie1');
        cllection.find().toArray(
            function(err,docs){
                assert.equal(null,err);
            }
        )
        collection.findOne({name:'${ronnie1}'},{$set:{'active':true}},function(err,docs){
            assert.equal(null,err);
        })
        db.close();
    })
})