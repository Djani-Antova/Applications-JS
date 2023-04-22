const { chromium } = require('playwright-chromium');

(async function() {     //IIFE
    const brouser = await chromium.launch();
    const page = await brouser.newPage();

    await page.goto('http://127.0.0.1:5500');
    await page.screenshot({path: 'screenshot.png'});

    await browser.close()
})();


// const { expect } = require('chai');
// let browser, page; // Declare reusable variables
// describe('E2E tests', async function() {
//   before(async () => { browser = await chromium.launch(); });
//   after(async () => { await browser.close(); });
//   beforeEach(async () => { page = await browser.newPage(); });
//   afterEach(async () => { await page.close(); }); 
// });
