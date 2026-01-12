// This file chooses a generated cached products file (if available) to avoid broken Amazon hotlinks.
// It falls back to the bundled base file.

let _exports
try {
  _exports = await import('./products.generated.js')
  // eslint-disable-next-line no-console
  console.log('Using generated cached product images')
} catch (e) {
  _exports = await import('./products.base.js')
}

export const { bestCatFoods, bestDogFoods, bestPuppyFoods, dogs, cats } = _exports

