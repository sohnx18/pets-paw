import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PRODUCTS_BASE = path.resolve(__dirname, '..', 'src', 'data', 'products.base.js')
const GENERATED = path.resolve(__dirname, '..', 'src', 'data', 'products.generated.js')
const OUT_DIR = path.resolve(__dirname, '..', 'public', 'amazon-images')

function parseImageUrls(content) {
  const re = new RegExp('image:\\s*"(https?:\\/\\/[^\"]+)"', 'g')
  const matches = new Set()
  let m
  while ((m = re.exec(content))) matches.add(m[1])
  return Array.from(matches)
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const options = new URL(url)
    const req = https.request(
      {
        hostname: options.hostname,
        path: options.pathname + (options.search || ''),
        method: 'GET',
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      },
      res => {
        if (res.statusCode && res.statusCode >= 400) return reject(new Error('Bad status ' + res.statusCode))
        const fileStream = fs.createWriteStream(dest)
        res.pipe(fileStream)
        fileStream.on('finish', () => fileStream.close(resolve))
        fileStream.on('error', reject)
      }
    )
    req.on('error', reject)
    req.end()
  })
}

;(async () => {
  try {
    if (!fs.existsSync(PRODUCTS_BASE)) {
      console.error('products.base.js not found, skipping image caching')
      process.exit(0)
    }

    const content = fs.readFileSync(PRODUCTS_BASE, 'utf8')
    const urls = parseImageUrls(content)
    if (!urls.length) {
      console.log('No image URLs found. Nothing to do.')
      process.exit(0)
    }

    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

    const urlToLocal = {}
    for (const url of urls) {
      try {
        const parsed = new URL(url)
        const baseName = path.basename(parsed.pathname).split('?')[0] || 'img'
        const dest = path.join(OUT_DIR, baseName)
        if (!fs.existsSync(dest)) {
          console.log('Downloading', url, '→', dest)
          await download(url, dest)
        } else {
          console.log('Already exists', dest)
        }
        urlToLocal[url] = '/amazon-images/' + baseName
      } catch (e) {
        console.warn('Failed to download', url, e.message)
      }
    }

    // Generate products.generated.js by replacing image URLs when possible
    let gen = content
    for (const [remote, local] of Object.entries(urlToLocal)) {
      gen = gen.split(remote).join(local)
    }

    fs.writeFileSync(GENERATED, gen)
    console.log('Wrote generated products to', GENERATED)
  } catch (err) {
    console.error(err)
    process.exit(2)
  }
})()
