import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({args: ['--no-sandbox']});
const page = await browser.newPage();
await page.goto(`file://${process.cwd()}/index.html`, {waitUntil: 'networkidle0'});
await page.pdf({path: 'deck.pdf', width: '1280px', height: '720px', printBackground: true});
await browser.close();
