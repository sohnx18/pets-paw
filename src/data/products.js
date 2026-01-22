// This file chooses a generated cached products file (if available) to avoid broken Amazon hotlinks.
// It falls back to the bundled base file.

import * as baseExports from './products.base.js'

export let bestCatFoods = baseExports.bestCatFoods
export let bestDogFoods = baseExports.bestDogFoods
export let bestPuppyFoods = baseExports.bestPuppyFoods
export let dogs = baseExports.dogs
export let cats = baseExports.cats

// Try to load generated file asynchronously and override if available
import('./products.generated.js').then(generatedExports => {
  if (generatedExports.bestCatFoods) bestCatFoods = generatedExports.bestCatFoods
  if (generatedExports.bestDogFoods) bestDogFoods = generatedExports.bestDogFoods
  if (generatedExports.bestPuppyFoods) bestPuppyFoods = generatedExports.bestPuppyFoods
  if (generatedExports.dogs) dogs = generatedExports.dogs
  if (generatedExports.cats) cats = generatedExports.cats
  // eslint-disable-next-line no-console
  console.log('Using generated cached product images')
}).catch(() => {
  // Fall back to base
})

