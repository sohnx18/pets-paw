function ProductCard({ name, price, image, buyLink }) {
  return (
    <div
      style={{
        width: "260px",
        border: "1px solid #eee",
        borderRadius: "16px",
        padding: "20px",
        background: "#fff"
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "contain",
          marginBottom: "12px"
        }}
        loading="lazy"
      />

      <h3 style={{ fontSize: "16px" }}>{name}</h3>
      <p style={{ fontWeight: "bold", margin: "8px 0" }}>{price}</p>

      <a
        href={buyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            background: "#22c55e",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: "999px",
            cursor: "pointer"
          }}
        >
          Buy Now
        </button>
      </a>
    </div>
  )
}

export default ProductCard
