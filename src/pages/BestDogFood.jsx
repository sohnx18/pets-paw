import ProductCard from "../components/ProductCard"
import { bestDogFoods } from "../data/products"
import { SEOHead } from "../utils/seo"

function BestDogFood() {
  const products = bestDogFoods

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Best Dog Food in India (2026)",
    "description": "Top dog foods in India for 2026 — nutrition, price and user reviews.",
    "url": "https://pets-paw-store.vercel.app/best-dog-food",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Best Dog Foods",
      "numberOfItems": products.length,
      "itemListElement": products.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "price": product.price.replace(/[^\d.]/g, ''),
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": product.buyLink
        }
      }))
    }
  }

  return (
    <>
      <SEOHead
        title="Best Dog Food in India (2026) | Pets Paw"
        description="Top dog foods in India for 2026 — nutrition, price and user reviews. Buy on Amazon."
        image="/images/drools.jpg"
        canonical="https://pets-paw-store.vercel.app/best-dog-food"
        schema={schema}
      />
      <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto", fontFamily: "sans-serif" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>🐶 Best Dog Food in India (2026)</h1>
        <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "40px" }}>
          Our top recommendations based on nutrition, price, and user reviews.
        </p>

        {/* Comparison Sections */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "600", color: "#374151", marginBottom: "20px" }}>🏆 Best Overall</h2>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <ProductCard
              name={products[1].name}
              price={products[1].price}
              image={products[1].image}
              buyLink={products[1].buyLink}
              benefits={products[1].benefits || []}
            />
          </div>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "600", color: "#374151", marginBottom: "20px" }}>💰 Best Value</h2>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <ProductCard
              name={products[0].name}
              price={products[0].price}
              image={products[0].image}
              buyLink={products[0].buyLink}
              benefits={products[0].benefits || []}
            />
          </div>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "600", color: "#374151", marginBottom: "20px" }}>⭐ Premium Pick</h2>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <ProductCard
              name={products[2].name}
              price={products[2].price}
              image={products[2].image}
              buyLink={products[2].buyLink}
              benefits={products[2].benefits || []}
            />
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "28px", fontWeight: "600", color: "#374151", marginBottom: "20px" }}>All Recommendations</h2>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {products.map((p) => (
              <ProductCard
                key={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                buyLink={p.buyLink}
                benefits={p.benefits || []}
              />
            ))}
          </div>
        </section>

        <p style={{ marginTop: "50px", fontSize: "14px", color: "#777" }}>
          Pets Paw is supported by readers. As an Amazon Associate we earn from qualifying purchases.
        </p>
      </div>
    </>
  )
}

export default BestDogFood
