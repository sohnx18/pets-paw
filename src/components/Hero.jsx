function Hero() {
  return (
    <section style={{
      padding: "80px 60px",
      maxWidth: "1000px",
      margin: "0 auto"
    }}>
      <h1 style={{
        fontSize: "48px",
        lineHeight: "1.2"
      }}>
        Everything your pet needs, <br />
        <span style={{ color: "#2ecc71", display: "inline-flex", alignItems: "center", gap: "8px" }}>
  chosen with love
  <span className="paw">🐾</span>
</span>

      </h1>

      <p style={{
        marginTop: "20px",
        fontSize: "18px",
        color: "#555",
        maxWidth: "600px"
      }}>
        Discover the best food, toys and care essentials for dogs and cats —
        all in one place.
      </p>

      <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
        <button style={{
          padding: "12px 24px",
          backgroundColor: "#2ecc71",
          color: "#fff",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer"
        }}>
          🐶 Shop Dogs
        </button>

        <button style={{
          padding: "12px 24px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "30px",
          cursor: "pointer"
        }}>
          🐱 Shop Cats
        </button>
      </div>
    </section>
  )
}

export default Hero
