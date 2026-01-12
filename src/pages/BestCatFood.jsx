import { useEffect } from "react"
import ProductCard from "../components/ProductCard"

function BestCatFood() {
  useEffect(() => {
    document.title = "Best Cat Food in India (2026) | Pets Paw"
  }, [])

  const products = [
    {
      id: 1,
      name: "Whiskas Adult Dry Cat Food – Ocean Fish",
      price: "₹ 990",
      image: "https://m.media-amazon.com/images/I/81UFCQjgO3L._SL1500_.jpg",
      buyLink: "https://amzn.to/49x1Tgr"
    },
    {
      id: 2,
      name: "Drools Adult Dry Cat Food",
      price: "₹ 889",
      image: "https://m.media-amazon.com/images/I/71W1xE0hKDL._SL1500_.jpg",
      buyLink: "https://amzn.to/3LHQS3Z"
    },
    {
      id: 3,
      name: "Me-O Adult Dry Cat Food",
      price: "₹ 645",
      image: "https://m.media-amazon.com/images/I/71+6h9z-2yL._SL1500_.jpg",
      buyLink: "https://amzn.to/3YzO9fW"
    }
  ]

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>🐱 Best Cat Food in India (2026)</h1>

      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginTop: "40px" }}>
        {products.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}

export default BestCatFood
