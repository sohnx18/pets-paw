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
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.target.onerror = null
          e.target.src = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22400%22%20height%3D%22200%22%3E%3Crect%20fill%3D%22%23f3f3f3%22%20width%3D%22100%25%22%20height%3D%22100%25%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23777%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2220%22%3EImage%20not%20available%3C/text%3E%3C/svg%3E'
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
