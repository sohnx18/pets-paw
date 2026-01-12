export default function Sections() {
  return (
    <>
      {/* TRUST STRIP */}
      <div style={{ background: "#f8fafc", padding: "20px", textAlign: "center" }}>
        <p>✔ Based on real pet owner reviews</p>
        <p>✔ Only safe & popular products</p>
        <p>✔ No low-quality or harmful food</p>
        <p>✔ Updated for 2026</p>
      </div>

      {/* DOG ZONE */}
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>For Dog Parents 🐕</h2>

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <a href="/best-dog-food"><button style={btn}>Best Dog Food</button></a>
          <a href="/best-puppy-food"><button style={btn}>Best Puppy Food</button></a>
          <button style={btn}>Best Dog Treats (soon)</button>
          <button style={btn}>Best Dog Toys (soon)</button>
        </div>
      </div>

      {/* CAT ZONE */}
      <div style={{ padding: "60px", textAlign: "center", background: "#f9fafb" }}>
        <h2>For Cat Parents 🐈</h2>

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <a href="/best-cat-food"><button style={btn}>Best Cat Food</button></a>
          <button style={btn}>Best Cat Litter (soon)</button>
          <button style={btn}>Best Cat Toys (soon)</button>
        </div>
      </div>

      {/* WHY TRUST */}
      <div style={{ padding: "80px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2>Why Trust Pets Paw?</h2>
        <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.6", color: "#555" }}>
          Pets Paw was created by pet lovers who were tired of low-quality products being sold online.
          We compare ingredients, prices and reviews so you can confidently choose what’s best for your pet.
        </p>
      </div>
    </>
  )
}

const btn = {
  padding: "14px 24px",
  borderRadius: "999px",
  border: "1px solid #22c55e",
  background: "white",
  color: "#22c55e",
  fontWeight: "600",
  cursor: "pointer"
}
