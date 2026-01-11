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
      image: "https://images-na.ssl-images-amazon.com/images/I/81UFCQjgO3L.jpg",
      buyLink: "https://amzn.to/49x1Tgr"
    },
    {
      id: 2,
      name: "Drools Adult Dry Cat Food",
      price: "₹ 799",
      image: "https://images-na.ssl-images-amazon.com/images/I/71W1xE0hKDL.jpg",
      buyLink: "https://amzn.to/45Dydgp"
    },
    {
      id: 3,
      name: "Me-O Adult Dry Cat Food",
      price: "₹ 645",
      image: "https://images-na.ssl-images-amazon.com/images/I/71%2B6h9z-2yL.jpg",
      buyLink: "https://amzn.to/4sP4yLo"
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
          made from real meat like chicken or fish. The best cat food in India
          should contain quality animal protein and essential vitamins.
        </p>

        <p>
          Avoid cat foods that are full of corn, soy, and artificial colors.
          These ingredients provide little nutrition and may cause stomach issues.
        </p>

        <h2>Dry vs Wet cat food</h2>
        <p>
          Dry food is affordable and easy to store, while wet food helps with
          hydration. Most Indian cat owners use dry food daily and add wet food
          as an occasional treat.
        </p>

        <h2>Best cat food brands in India</h2>
        <p>
          Whiskas, Drools and Me-O are some of the most trusted brands in India.
          They offer balanced nutrition at different price points.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Which is the healthiest cat food?</h3>
        <p>
          Cat foods with high meat content and no fillers are the healthiest.
          Whiskas and Drools are good choices for most cats.
        </p>

        <h3>How much food should I give my cat?</h3>
        <p>
          Adult cats usually need 50–70 grams of dry food per day depending on
          their weight and activity.
        </p>

        <h3>Is dry food enough for cats?</h3>
        <p>
          Yes, high-quality dry food provides complete nutrition. You can add
          wet food occasionally for variety.
        </p>
      </div>
    </div>
  )
}

export default BestCatFood
