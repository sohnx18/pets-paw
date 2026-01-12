import { useEffect } from "react"
import ProductCard from "../components/ProductCard"
import { bestPuppyFoods } from "../data/products"
import { setTitleAndMeta } from "../utils/seo"

function BestPuppyFood() {
  const puppyFoods = bestPuppyFoods

  // set SEO meta client-side (keeps build simple and avoids a new dependency)
  useEffect(() => {
    setTitleAndMeta({
      title: 'Best Puppy Food in India (2026) | Pets Paw',
      description: 'Best puppy food picks in India — tested for growth, nutrition and value. Buy safely on Amazon.',
      image: '/images/royal-canin-puppy-4kg.jpg',
      canonical: 'https://pets-paw-store.vercel.app/best-puppy-food'
    })
  }, [])

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
