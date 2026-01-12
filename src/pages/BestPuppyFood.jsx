import ProductCard from "../components/ProductCard"
import { bestPuppyFoods } from "../data/products"

function BestPuppyFood() {
  const puppyFoods = bestPuppyFoods

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        🐶 Best Puppy Food in India (2026)
      </h1>

      <p style={{ color: "#555", marginBottom: "40px" }}>
        We compared nutrition, price and reviews to find the best puppy foods for healthy growth.
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {puppyFoods.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            buyLink={product.buyLink}
          />
        ))}
      </div>

    </div>
  )
}

export default BestPuppyFood
