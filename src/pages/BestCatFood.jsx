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

      <p style={{ maxWidth: "700px", marginTop: "10px", color: "#555" }}>
        Looking for the best cat food in India? We reviewed Whiskas, Drools and Me-O
        based on ingredients, nutrition, price and customer reviews to help you
        choose the healthiest option for your cat.
      </p>

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

      {/* SEO Content */}
      <div style={{ marginTop: "60px", maxWidth: "800px", lineHeight: "1.7" }}>
        <h2>How to choose the best cat food in India?</h2>
        <p>
          Cats are obligate carnivores, which means they need high-protein food
          made from real meat like chicken or fish.
        </p>

        <p>
          Avoid foods filled with corn, soy and artificial colors.
        </p>

        <h2>Dry vs Wet cat food</h2>
        <p>
          Dry food is affordable and easy to store. Wet food helps with hydration.
        </p>

        <h2>Best cat food brands in India</h2>
        <p>
          Whiskas, Drools and Me-O are trusted brands used by millions of pet owners.
        </p>
      </div>
    </div>
  )
}

export default BestCatFood
