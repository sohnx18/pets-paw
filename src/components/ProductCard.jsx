function ProductCard({ name, price, image, buyLink }) {
  return (
    <div style={{
      width: "260px",
      border: "1px solid #eee",
      borderRadius: "12px",
      padding: "16px",
      background: "#fff"
    }}>
      
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain"
        }}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200"
        }}
      />

      <h3 style={{ marginTop: "12px", fontSize: "16px" }}>
        {name}
      </h3>

      <p style={{ fontWeight: "bold", marginTop: "8px" }}>
        {price}
      </p>

      <a
        href={buyLink}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          marginTop: "12px",
          textAlign: "center",
          padding: "10px",
          background: "#ff9900",
          color: "#000",
          borderRadius: "8px",
          fontWeight: "bold",
          textDecoration: "none"
        }}
      >
        Buy on Amazon
      </a>

    </div>
  )
}

export default ProductCard
