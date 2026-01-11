import ProductCard from "../components/ProductCard"

function BestCatFood() {
  const products = [
    {
      id: 1,
      name: "Whiskas Adult Dry Cat Food (3kg)",
      price: "₹990",
      image: "https://images-na.ssl-images-amazon.com/images/I/81UFCQjgO3L.jpg",
      buyLink: "https://amzn.to/49x1Tgr"
    },
    {
      id: 2,
      name: "Drools Ocean Fish Adult Cat Food",
      price: "₹749",
      image: "https://images-na.ssl-images-amazon.com/images/I/81e2pU2h6DL.jpg",
      buyLink: "https://amzn.to/4hQ3vyy"
    },
    {
      id: 3,
      name: "Royal Canin Persian Adult Cat Food",
      price: "₹1,180",
      image: "https://images-na.ssl-images-amazon.com/images/I/81S7qvEwD1L.jpg",
      buyLink: "https://amzn.to/4gKpAqZ"
    }
  ]

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>🐱 Best Cat Food in India (2026)</h1>

      <p style={{ maxWidth: "700px", marginTop: "10px", color: "#555" }}>
        We reviewed and compared the best cat food brands in India based on
        nutrition, ingredients, price and customer reviews.
      </p>

      <div
        style={{
          display: "flex",
          gap: "24px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            buyLink={p.buyLink}
          />
        ))}
      </div>
    </div>
  )
}

export default BestCatFood
