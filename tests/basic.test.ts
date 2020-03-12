'use strict'; // see strict mode
var url ='https://google.com';

const puppeteer = require('puppeteer');

let browser:any, page, content;
 describe('test', ()=>{
   beforeAll(async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const content = await page.goto(url, {waitUntil:'networkidle2'});
   });
   afterAll(()=>{
    browser.close();
   });
   it('basic ',async (done)=>{
     setTimeout(()=>{done();}, 1000);
   });
 });