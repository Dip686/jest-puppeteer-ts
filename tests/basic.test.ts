'use strict'; // see strict mode
var url ='https://google.com';

const puppeteer = require('puppeteer');

let browser:any, page, content;
 describe('test', ()=>{
   beforeAll(async()=>{
    browser = await puppeteer.launch();
    page = await browser.newPage();
    content = await page.goto(url, {waitUntil:'networkidle2'});
   });
   afterAll(()=>{
    browser.close();
   });
   it('basic ',async (done)=>{
     setTimeout(()=>{done();}, 1000);
   });
 });