import { useEffect } from "react"
import ProductCard from "../components/ProductCard"
import { bestCatFoods } from "../data/products"
import { setTitleAndMeta } from "../utils/seo"

function BestCatFood() {
  useEffect(() => {
    setTitleAndMeta({
      title: 'Best Cat Food in India (2026) | Pets Paw',
      description: 'Top cat foods in India for 2026 — nutrition, price and user reviews. Buy on Amazon.',
      image: '/images/whiskas.jpg',
      canonical: 'https://pets-paw-store.vercel.app/best-cat-food'
    })
  }, [])

  const products = bestCatFoods

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      <Helmet>
        <title>Best Cat Food in India (2026) | Pets Paw</title>
        <meta name="description" content="Top cat foods in India for 2026 — nutrition, price and user reviews. Buy on Amazon." />
        <meta property="og:title" content="Best Cat Food in India (2026) | Pets Paw" />
        <meta property="og:description" content="Top cat foods in India — nutrition, price and reviews." />
        <meta property="og:image" content="/images/whiskas.jpg" />
        <link rel="canonical" href="https://pets-paw-store.vercel.app/best-cat-food" />
      </Helmet>

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
