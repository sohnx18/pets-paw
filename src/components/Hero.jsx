import { Link } from "react-router-dom"

function Hero() {
  return (
    <section
      style={{
        padding: "80px 60px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          lineHeight: "1.2"
        }}
      >
        Everything your pet needs,{" "}
        <span style={{ color: "#22c55e" }}>
          chosen with love 🐾
        </span>
      </h1>

      <p style={{ marginTop: "16px", color: "#555", fontSize: "18px" }}>
        Discover the best food, toys and care essentials for dogs and cats — all in one place.
      </p>

      <div style={{ display: "flex", gap: "16px", marginTop: "30px" }}>
        <Link to="/dogs" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "14px 28px",
              backgroundColor: "#22c55e",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              color: "white",
              fontWeight: "600",
              fontSize: "16px"
            }}
          >
            🐶 Shop Dog Bestsellers
          </button>
        </Link>

        <Link to="/cats" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "14px 28px",
              backgroundColor: "white",
              border: "1px solid #222",
              borderRadius: "30px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px"
            }}
          >
            🐱 Shop Cat Bestsellers
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero
