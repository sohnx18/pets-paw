import { useEffect } from "react"
import ProductCard from "../components/ProductCard"

function BestDogFood() {
  useEffect(() => {
    document.title = "Best Dog Food in India (2026) | Pets Paw"
  }, [])

  import { bestDogFoods } from "../data/products"

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
