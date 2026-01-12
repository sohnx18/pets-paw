import { chromium } from 'playwright';

const BASE = 'https://pets-paw-store.vercel.app';
const pages = ['/', '/dogs', '/cats', '/best-dog-food', '/best-puppy-food', '/best-cat-food'];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const results = [];

  for (const path of pages) {
    const url = BASE + path;
    console.log('Visiting', url);
    const res = { path, url, errors: [], images: [] };
    try {
      const r = await page.goto(url, { waitUntil: 'networkidle' });
      res.status = r && r.status();

      // collect image load states
      const imgs = await page.$$eval('img', imgs => imgs.map(i => ({ src: i.src, naturalWidth: i.naturalWidth, naturalHeight: i.naturalHeight, alt: i.alt })));
      res.images = imgs;

      // click first Buy button if present (open in new tab)
      const buy = await page.$('a[href*="amazon"]');
      if (buy) {
        const [newPage] = await Promise.all([
          page.context().waitForEvent('page'),
          buy.click({ button: 'middle' })
        ].filter(Boolean));
        if (newPage) {
          await newPage.waitForLoadState('domcontentloaded');
          res.buyUrl = newPage.url();
          await newPage.close();
        }
      }
    } catch (err) {
      res.errors.push(err.message);
    }
    results.push(res);
    console.log(JSON.stringify(res, null, 2));
  }

  await browser.close();
  // summarize
  const badImages = results.flatMap(r => r.images.filter(i => i.naturalWidth === 0).map(i => ({ page: r.path, src: i.src })));
  console.log('\nSummary:');
  console.log('Pages tested:', pages.length);
  console.log('Images with naturalWidth 0:', badImages.length);
  badImages.forEach(b => console.log(`- ${b.page}: ${b.src}`));
})();