function Sections() {
  return (
    <section style={{
      padding: "60px",
      maxWidth: "1100px",
      margin: "0 auto"
    }}>

      {/* DOGS SECTION */}
      <div style={{
        padding: "40px",
        border: "1px solid #eee",
        borderRadius: "16px",
        marginBottom: "40px"
      }}>
        <h2>🐶 For Dogs</h2>
        <p style={{ color: "#555", marginTop: "10px" }}>
          Food, toys and care essentials curated for dogs.
        </p>

        <button style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          background: "#fff",
          cursor: "pointer"
        }}>
          Explore Dog Products →
        </button>
      </div>

      {/* CATS SECTION */}
      <div style={{
        padding: "40px",
        border: "1px solid #eee",
        borderRadius: "16px"
      }}>
        <h2>🐱 For Cats</h2>
        <p style={{ color: "#555", marginTop: "10px" }}>
          Food, toys and care essentials curated for cats.
        </p>

        <button style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          background: "#fff",
          cursor: "pointer"
        }}>
          Explore Cat Products →
        </button>
      </div>

    </section>
  )
}

export default Sections
