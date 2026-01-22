import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center", maxWidth: "900px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "800", color: "#1f2937" }}>
        Pets Paw 🐾
      </h1>

      <h2 style={{ fontSize: "28px", marginTop: "10px", color: "#374151", fontWeight: "600" }}>
        Everything your pet needs, in one place
      </h2>

      <p style={{ marginTop: "20px", fontSize: "18px", color: "#6b7280", lineHeight: "1.6" }}>
        Safe, reviewed products for dogs and cats. Trusted recommendations from pet experts.
        Find food, toys, grooming supplies, and more – all affiliate-compliant and vetted for quality.
      </p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", fontSize: "14px", color: "#9ca3af" }}>
        <span>✓ Expert-reviewed</span>
        <span>✓ Affiliate-disclosure</span>
        <span>✓ No sponsored content</span>
      </div>

      <div style={{ marginTop: "40px", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/dogs">
          <button style={btnStyle}>🐶 Shop for Dogs</button>
        </Link>

        <Link to="/cats">
          <button style={btnStyle}>🐱 Shop for Cats</button>
        </Link>

        <Link to="/best-dog-food">
          <button style={btnStyle}>🥩 Best Dog Food</button>
        </Link>
      </div>

      <p style={{ marginTop: "30px", fontSize: "12px", color: "#9ca3af", lineHeight: "1.4" }}>
        *Pets Paw is an affiliate site. We may earn commissions from purchases made through our links at no extra cost to you.
        All recommendations are based on independent research and user reviews.
      </p>
    </section>
  )
}

const btnStyle = {
  padding: "16px 28px",
  fontSize: "18px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  background: "#22c55e",
  color: "white",
  fontWeight: "600"
}
