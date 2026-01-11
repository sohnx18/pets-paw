  const handleBuy = () => {
    window.open(buyLink, "_blank", "noopener,noreferrer")
  }

function ProductCard({ image, name, price, buyLink }) {
  const handleBuy = () => {
    window.open(buyLink, "_blank")
  }

  return (
   <div
  style={{
    border: "1px solid #eee",
    borderRadius: "16px",
    padding: "20px",
    width: "220px",
    transition: "all 0.25s ease",
    cursor: "pointer",
    boxShadow: "0 0 0 rgba(0,0,0,0)"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)"
    e.currentTarget.style.transform = "translateY(-4px)"
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)"
    e.currentTarget.style.transform = "translateY(0)"
  }}
>

      <img
  src={image}
  alt={name}
  style={{
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover"
  }}
/>

      <h3 style={{ marginTop: "12px", fontSize: "16px" }}>
        {name}
      </h3>

     <p style={{ marginTop: "6px", fontWeight: "600", color: "#27ae60" }}>
  {price}
</p>

<p style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}>
  Free delivery • Amazon verified
</p>

      <button
  onClick={handleBuy}
  style={{
    marginTop: "12px",
    padding: "10px 18px",
    borderRadius: "24px",
    border: "none",
    backgroundColor: "#2ecc71",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = "0 6px 14px rgba(46, 204, 113, 0.4)"
    e.currentTarget.style.transform = "scale(1.05)"
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = "none"
    e.currentTarget.style.transform = "scale(1)"
  }}
>

      
        Buy Now
      </button>
    </div>
  )
}

export default ProductCard
