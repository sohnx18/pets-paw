import { fileURLToPath } from 'url'
import path from 'path'
import { setTimeout } from 'timers/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const { bestCatFoods, bestDogFoods, bestPuppyFoods, dogs, cats } = await import('../src/data/products.js')

const allProducts = [
  ...bestCatFoods,
  ...bestDogFoods,
  ...bestPuppyFoods,
  ...dogs,
  ...cats
]

async function checkUrl(url, timeoutMs = 5000, isBuyLink = false) {
  try {
    const controller = new AbortController()
    // Timeout helper
    const timeout = setTimeout(timeoutMs).then(() => controller.abort())

    // Try HEAD first
    let res
    try {
      res = await fetch(url, { method: 'HEAD', signal: controller.signal })
    } catch (err) {
      // Some servers do not support HEAD; try GET with a small range
      try {
        res = await fetch(url, { method: 'GET', headers: { Range: 'bytes=0-1023' }, signal: controller.signal })
      } catch (err2) {
        res = null
      }
    }

    // If HEAD/Range GET returned 405 or no response and this is a buy link, try a normal GET
    if ((res && res.status === 405) || (!res && isBuyLink)) {
      try {
        res = await fetch(url, { method: 'GET', signal: controller.signal })
      } catch (err3) {
        res = null
      }
    }

    if (!res) return { ok: false, status: 'no-response' }
    return { ok: res.ok, status: res.status, url: res.url }
  } catch (err) {
    return { ok: false, status: err.name || err.message }
  }
}

console.log('Checking', allProducts.length, 'product image URLs and buy links...')

const results = []
for (const p of allProducts) {
  const imageResult = await checkUrl(p.image)
  // For buyLink, allow fallback to a normal GET if servers reject HEAD/Range
  const buyResult = await checkUrl(p.buyLink, 5000, true)
  const item = {
    id: p.id,
    name: p.name,
    image: { url: p.image, ...imageResult },
    buyLink: { url: p.buyLink, ...buyResult }
  }
  results.push(item)
  console.log(`${p.name}`)
  console.log(`  image -> ${imageResult.ok ? 'OK' : 'FAILED'} (${imageResult.status})`)
  console.log(`  buy   -> ${buyResult.ok ? 'OK' : 'FAILED'} (${buyResult.status})`)
}

// Summarize
const failedImages = results.filter(r => !r.image.ok)
const failedBuys = results.filter(r => !r.buyLink.ok)

console.log('\nSummary:')
console.log(`Total products: ${results.length}`)
console.log(`Image failures: ${failedImages.length}`)
console.log(`Buy link failures: ${failedBuys.length}`)

if (failedImages.length) {
  console.log('\nFailed images:')
  failedImages.forEach(f => console.log(`- ${f.name}: ${f.image.url} (${f.image.status})`))
}
if (failedBuys.length) {
  console.log('\nFailed buy links:')
  failedBuys.forEach(f => console.log(`- ${f.name}: ${f.buyLink.url} (${f.buyLink.status})`))
}

console.log('\nCrawl complete.')
