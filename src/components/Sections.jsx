import { Link } from "react-router-dom"

function Sections() {
  return (
    <section
      style={{
        padding: "60px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* DOGS SECTION */}
      <div
        style={{
          padding: "40px",
          border: "1px solid #eee",
          borderRadius: "16px",
          marginBottom: "40px",
        }}
      >
        <h2>🐶 For Dogs</h2>
        <p style={{ color: "#555", marginTop: "10px" }}>
          Food, toys and care essentials curated for dogs.
        </p>

        <Link to="/dogs">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Explore Dog Products →
          </button>
        </Link>
      </div>

      {/* CATS SECTION */}
      <div
        style={{
          padding: "40px",
          border: "1px solid #eee",
          borderRadius: "16px",
        }}
      >
        <h2>🐱 For Cats</h2>
        <p style={{ color: "#555", marginTop: "10px" }}>
          Food, toys and care essentials curated for cats.
        </p>

        <Link to="/cats">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Explore Cat Products →
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Sections
