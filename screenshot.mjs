import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join } from 'path';

const dir = 'temporary screenshots';
mkdirSync(dir, { recursive: true });

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page    = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });
await new Promise(r => setTimeout(r, 2000));

// 1. Entry screen
await page.screenshot({ path: join(dir, '1-entry.png') });
console.log('1. entry screen');

// 2. Click enter button → grid
await page.click('#ebtn');
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: join(dir, '2-grid.png') });
console.log('2. grid overview');

// 3. Hover ME
await page.hover('.cell[data-z="me"]');
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: join(dir, '3-hover-me.png') });
console.log('3. hover ME');

// 4. Click ME
await page.click('.cell[data-z="me"]');
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: join(dir, '4-section-me.png') });
console.log('4. ME section');

// 5. Back to grid
await page.click('#back');
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: join(dir, '5-back-to-grid.png') });
console.log('5. back to grid');

// 6. Click SOUND
await page.click('.cell[data-z="sound"]');
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: join(dir, '6-section-sound.png') });
console.log('6. SOUND section');

await browser.close();
console.log('Done.');
