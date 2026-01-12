// Usage: node scripts/fetch-amzn-image.js <productUrl> <outputPath>
const fs = require('fs')
const path = require('path')
const url = process.argv[2]
const out = process.argv[3]
if (!url || !out) {
  console.error('Usage: node scripts/fetch-amzn-image.js <productUrl> <outputPath>')
  process.exit(1)
}
;(async () => {
  try {
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] })
    const page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)')
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

    const imgUrl = await page.evaluate(() => {
      const selectors = [
        '#landingImage',
        '#imgTagWrapperId img',
        '#main-image-container img',
        'img[data-old-hires]',
        'img#imgBlkFront',
        'img.a-dynamic-image',
        'meta[property="og:image"]'
      ]

      for (const sel of selectors) {
        const el = document.querySelector(sel)
        if (!el) continue
        if (el.tagName === 'META') {
          const v = el.getAttribute('content')
          if (v) return v
        }
        const src = el.getAttribute('data-old-hires') || el.getAttribute('data-src') || el.getAttribute('src') || el.getAttribute('data-a-dynamic-image')
        if (!src) continue
        // data-a-dynamic-image may be a JSON string
        try {
          if (src.trim().startsWith('{')) {
            const obj = JSON.parse(src.replace(/\'|\"/g, '"'))
            const keys = Object.keys(obj)
            if (keys.length) return keys[0]
          }
        } catch (e) {}

        if (src) return src
      }
      return null
    })

    if (!imgUrl) throw new Error('Could not find image URL on the page')
    console.log('Found image URL:', imgUrl)

    const res = await page.goto(imgUrl)
    if (!res || !res.ok()) throw new Error('Failed to download image')
    const buffer = await res.buffer()
    const outDir = path.dirname(out)
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(out, buffer)
    console.log('Saved image to', out)

    await browser.close()
  } catch (err) {
    console.error(err)
    process.exit(2)
  }
})()
