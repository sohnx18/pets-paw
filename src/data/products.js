// This file chooses a generated cached products file (if available) to avoid broken Amazon hotlinks.
// It falls back to the bundled base file.

import * as baseExports from './products.base.js'

export let bestCatFoods = baseExports.bestCatFoods
export let bestDogFoods = baseExports.bestDogFoods
export let bestPuppyFoods = baseExports.bestPuppyFoods
export let dogs = baseExports.dogs
export let cats = baseExports.cats
export let dogFoodAdult = baseExports.dogFoodAdult
export let dogFoodPuppy = baseExports.dogFoodPuppy
export let dogTreatsSupplements = baseExports.dogTreatsSupplements
export let dogGrooming = baseExports.dogGrooming
export let dogToys = baseExports.dogToys
export let dogLeashesCollars = baseExports.dogLeashesCollars
export let dogBedsCrates = baseExports.dogBedsCrates

// Try to load generated file asynchronously and override if available
import('./products.generated.js').then(generatedExports => {
  if (generatedExports.bestCatFoods) bestCatFoods = generatedExports.bestCatFoods
  if (generatedExports.bestDogFoods) bestDogFoods = generatedExports.bestDogFoods
  if (generatedExports.bestPuppyFoods) bestPuppyFoods = generatedExports.bestPuppyFoods
  if (generatedExports.dogs) dogs = generatedExports.dogs
  if (generatedExports.cats) cats = generatedExports.cats
  if (generatedExports.dogFoodAdult) dogFoodAdult = generatedExports.dogFoodAdult
  if (generatedExports.dogFoodPuppy) dogFoodPuppy = generatedExports.dogFoodPuppy
  if (generatedExports.dogTreatsSupplements) dogTreatsSupplements = generatedExports.dogTreatsSupplements
  if (generatedExports.dogGrooming) dogGrooming = generatedExports.dogGrooming
  if (generatedExports.dogToys) dogToys = generatedExports.dogToys
  if (generatedExports.dogLeashesCollars) dogLeashesCollars = generatedExports.dogLeashesCollars
  if (generatedExports.dogBedsCrates) dogBedsCrates = generatedExports.dogBedsCrates
  // eslint-disable-next-line no-console
  console.log('Using generated cached product images')
}).catch(() => {
  // Fall back to base
})

