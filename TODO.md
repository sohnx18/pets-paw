# TODO: Transform Pets Paw Affiliate Website

## 1. Expand Product Data (src/data/products.base.js)
- [x] Add categorized products for Dogs:
  - Food: adult, puppy, breed-specific
  - Treats & supplements
  - Grooming (shampoo, brushes)
  - Toys
  - Leashes, collars, harnesses
  - Beds & crates
- [x] Add for Cats:
  - Food: adult, kitten
  - Litter & litter boxes
  - Toys
  - Grooming
  - Scratchers
- [x] Add Universal/Pets:
  - Health supplements
  - Accessories
  - Cleaning & hygiene products
- [x] For each product, add 'benefits' array with short bullets
- [x] Ensure price labels only (Budget/Mid-range/Premium), no numeric prices

## 2. UI/UX Improvements
- [ ] Update Hero.jsx: Add value proposition, trust signals, affiliate disclosure
- [ ] Enhance ProductCard.jsx: Add benefits display, consistent card size, improve CTA to "Check on Amazon"
- [ ] Apply clean layout: Consistent spacing, modern typography, color scheme

## 3. Product Expansion & Pages
- [ ] Modify Dogs.jsx: Structure as category sections with internal links
- [ ] Modify Cats.jsx: Structure as category sections with internal links
- [ ] Add Universal section (decide on page or section)
- [ ] Update Best* pages: Add comparison sections (Best Overall, Best Value, Premium Pick) with benefits

## 4. Affiliate Optimization
- [ ] Ensure affiliate disclosure prominent in Hero and Footer
- [ ] Add internal linking: Hero buttons to categories, pages to related categories
- [ ] Benefits bullets for conversion

## 5. Preserve SEO/Performance/Compliance
- [ ] Keep Helmet schemas intact
- [ ] No heavy animations; subtle transitions
- [ ] Ensure mobile responsiveness
- [ ] Run npm run build: no errors/warnings
- [ ] Test performance and compliance
