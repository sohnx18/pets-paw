import { useEffect } from "react"
import ProductCard from "../components/ProductCard"

function BestDogFood() {
  useEffect(() => {
    document.title = "Best Dog Food in India (2026) | Pets Paw"
  }, [])

  const products = [
    {
      id: 1,
      name: "Pedigree Adult Dry Dog Food (3kg)",
      price: "₹ 679",
      image: "https://m.media-amazon.com/images/I/81R2m9+uT2L._SL1500_.jpg",
      buyLink: "https://amzn.to/3LGhoe0"
    },
    {
      id: 2,
      name: "Drools Adult Dry Dog Food",
      price: "₹ 722",
      image: "https://m.media-amazon.com/images/I/71o84Bphv-L._SY355_.jpg",
      buyLink: "https://amzn.to/3YT6S6p"
    },
    {
      id: 3,
      name: "Royal Canin Puppy Medium 4kg",
      price: "₹ 3,776",
      image: "https://m.media-amazon.com/images/I/614A0idaTvL._SL1200_.jpg",
      buyLink: "https://amzn.to/4bz3W66"
    }
  ]

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
