import ProductCard from "../components/ProductCard"

function BestDogFood() {
  const products = [
    {
      id: 1,
      name: "Pedigree Adult Dry Dog Food (3kg)",
      price: "₹679",
      image: "https://m.media-amazon.com/images/I/81R2m9+uT2L._SL1500_.jpg",
      buyLink: "https://amzn.to/yourlink1"
    },
    {
      id: 2,
      name: "Drools Adult Dry Dog Food",
      price: "₹722",
      image: "https://m.media-amazon.com/images/I/71m3zV2k7CL._SL1500_.jpg",
      buyLink: "https://amzn.to/yourlink2"
    },
    {
      id: 3,
      name: "Royal Canin Puppy Medium 4kg",
      price: "₹3,776",
      image: "https://m.media-amazon.com/images/I/614A0idaTvL._SL1200_.jpg",
      buyLink: "https://amzn.to/4bz3W66"
    }
  ]

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>🐶 Best Dog Food in India (2026)</h1>

      <p style={{ maxWidth: "700px", marginTop: "10px", color: "#555" }}>
        We reviewed and compared the best dog food brands in India based on nutrition,
        ingredients, price and customer reviews.
      </p>

      <div
        style={{
          display: "flex",
          gap: "24px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >
        {products.map(p => (
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

export default BestDogFood
