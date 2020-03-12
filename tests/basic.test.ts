'use strict'; // see strict mode
var url ='https://google.com';

const puppeteer = require('puppeteer');

(async() => {

const browser = await puppeteer.launch();
const page = await browser.newPage();
const content = await page.goto(url, {waitUntil:'networkidle2'});
browser.close();

 })();

 describe('test', ()=>{
   beforeAll(()=>{
   });
   it('basic ',async (done)=>{
     done();
   });
 });