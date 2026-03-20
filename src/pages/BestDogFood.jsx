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

  const containerStyle = {
    padding: "80px 40px",
    maxWidth: "1400px", 
    margin: "0 auto",
    background: 'var(--bg)',
  }

  const h1Style = {
    fontSize: "44px",
    fontWeight: "900",
    background: 'linear-gradient(135deg, var(--primary), var(--accent))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: "24px",
    lineHeight: '1.1'
  }

  const introStyle = {
    fontSize: "20px", 
    color: "var(--text-muted)", 
    marginBottom: "60px",
    maxWidth: '800px',
    lineHeight: '1.7'
  }

  const sectionStyle = {
    marginBottom: "80px",
    padding: '40px 0'
  }

  const h2Style = {
    fontSize: "32px", 
    fontWeight: "800", 
    color: "var(--text)",
    marginBottom: "32px",
    paddingBottom: '12px',
    borderBottom: '2px solid var(--primary-light)'
  }

  const gridStyle = {
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px"
  }

  const disclaimerStyle = {
    marginTop: "60px", 
    fontSize: "14px", 
    color: "var(--text-muted)", 
    textAlign: 'center',
    padding: '20px',
    background: 'var(--primary-light)',
    borderRadius: 'var(--radius)'
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
      <div style={containerStyle}>
        <h1 style={h1Style}>🐶 Best Dog Food in India (2026)</h1>
        <p style={introStyle}>
          Our top recommendations based on nutrition, price, and user reviews from thousands of pet parents.
        </p>

        {/* Comparison Sections */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>🏆 Best Overall</h2>
          <div style={gridStyle}>
            <ProductCard
              name={products[1].name}
              price={products[1].price}
              image={products[1].image}
              buyLink={products[1].buyLink}
              benefits={products[1].benefits || []}
            />
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>💰 Best Value</h2>
          <div style={gridStyle}>
            <ProductCard
              name={products[0].name}
              price={products[0].price}
              image={products[0].image}
              buyLink={products[0].buyLink}
              benefits={products[0].benefits || []}
            />
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>⭐ Premium Pick</h2>
          <div style={gridStyle}>
            <ProductCard
              name={products[2].name}
              price={products[2].price}
              image={products[2].image}
              buyLink={products[2].buyLink}
              benefits={products[2].benefits || []}
            />
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>All Recommendations</h2>
          <div style={gridStyle}>
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

        <p style={disclaimerStyle}>
          Pets Paw is supported by readers. As an Amazon Associate we earn from qualifying purchases. All opinions are our own.
        </p>
      </div>
    </>
  )
}

export default BestDogFood
