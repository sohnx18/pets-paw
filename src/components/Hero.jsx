import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "800" }}>
        Pets Paw 🐾
      </h1>

      <h2 style={{ fontSize: "28px", marginTop: "10px", color: "#333" }}>
        Find the safest & best products for your pet
      </h2>

      <p style={{ marginTop: "20px", fontSize: "18px", color: "#666" }}>
        We research dog & cat food, toys and health products so you don’t waste money
        or risk your pet’s health.
      </p>

      <div style={{ marginTop: "40px", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/best-dog-food">
          <button style={btnStyle}>🐶 Best Dog Food</button>
        </Link>

        <Link to="/best-cat-food">
          <button style={btnStyle}>🐱 Best Cat Food</button>
        </Link>

        <Link to="/best-puppy-food">
          <button style={btnStyle}>🐶 Puppy Essentials</button>
        </Link>
      </div>
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
