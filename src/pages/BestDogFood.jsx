import { useEffect } from "react"
import ProductCard from "../components/ProductCard"
import { bestDogFoods } from "../data/products"
import { setTitleAndMeta } from "../utils/seo"

function BestDogFood() {
  useEffect(() => {
    setTitleAndMeta({
      title: 'Best Dog Food in India (2026) | Pets Paw',
      description: 'Compare the best dog foods in India for 2026 — nutrition, price and reviews. Buy on Amazon.',
      image: '/images/pedigree-puppy.jpg',
      canonical: 'https://pets-paw-store.vercel.app/best-dog-food'
    })
  }, [])

  const products = bestDogFoods

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>🐶 Best Dog Food in India (2026)</h1>

      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginTop: "40px" }}>
        {products.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}

export default BestDogFood
