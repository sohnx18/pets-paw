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
      <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1>🐶 Best Dog Food in India (2026)</h1>

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
    </>
  )
}

export default BestDogFood
