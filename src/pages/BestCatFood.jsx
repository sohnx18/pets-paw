import { useEffect } from "react"
import ProductCard from "../components/ProductCard"

function BestCatFood() {
  useEffect(() => {
    document.title = "Best Cat Food in India (2026) | Pets Paw"
  }, [])

  const products = [
    {
      id: 1,
      name: "Whiskas Adult Dry Cat Food – Ocean Fish (3kg)",
      price: "₹ 990",
      image: "/images/whiskas.jpg",
      buyLink: "https://amzn.to/49x1Tgr"
    },
    {
      id: 2,
      name: "Drools Adult Dry Cat Food",
      price: "₹ 889",
      image: "/images/drools.jpg",
      buyLink: "https://amzn.to/3LHQS3Z"
    },
    {
      id: 3,
      name: "Me-O Adult Dry Cat Food",
      price: "₹ 1890",
      image: "/images/meo.jpg",
      buyLink: "https://amzn.to/3YzO9fW"
    }
  ]

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>🐱 Best Cat Food in India (2026)</h1>

      <div style={{ display: "flex", gap: "24px", marginTop: "40px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            buyLink={p.buyLink}
          />
        ))}
      </div>

      <p style={{ marginTop: "50px", fontSize: "14px", color: "#777" }}>
        Pets Paw is supported by readers. As an Amazon Associate we earn from qualifying purchases.
      </p>
    </div>
  )
}

export default BestCatFood
