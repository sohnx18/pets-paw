export function setTitleAndMeta({ title, description, image, canonical }) {
  if (title) document.title = title

  const setMeta = (name, content, attr = 'name') => {
    if (!content) return
    let el = document.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('description', description, 'name')
  setMeta('og:title', title, 'property')
  setMeta('og:description', description, 'property')
  if (image) {
    let og = document.querySelector('meta[property="og:image"]')
    if (!og) {
      og = document.createElement('meta')
      og.setAttribute('property', 'og:image')
      document.head.appendChild(og)
    }
    og.setAttribute('content', image)
  }

  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }
}
