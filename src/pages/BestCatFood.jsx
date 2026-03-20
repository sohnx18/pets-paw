import ProductCard from "../components/ProductCard"
import { bestCatFoods } from "../data/products"
import { SEOHead } from "../utils/seo"

function BestCatFood() {
  const products = bestCatFoods

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
        title="Best Cat Food in India (2026) | Pets Paw"
        description="Top cat foods in India for 2026 — nutrition, price and user reviews. Buy on Amazon."
        image="/images/whiskas.jpg"
        canonical="https://pets-paw-store.vercel.app/best-cat-food"
      />
      <div style={containerStyle}>
        <h1 style={h1Style}>🐱 Best Cat Food in India (2026)</h1>
        <p style={introStyle}>
          Top recommendations for feline friends based on nutrition, taste preferences, and thousands of reviews.
        </p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>All Top Picks</h2>
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

export default BestCatFood
