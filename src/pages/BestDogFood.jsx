import ProductCard from "../components/ProductCard"

function BestDogFood() {
  const products = [
    {
      id: 1,
      name: "Pedigree Adult Dry Dog Food (3kg)",
      price: "₹679",
      image: "https://images-na.ssl-images-amazon.com/images/I/712604bPj2L.jpg",
      buyLink: "https://amzn.to/yourlink1"
    },
    {
      id: 2,
      name: "Drools Adult Dry Dog Food",
      price: "₹722",
      image: "https://images-na.ssl-images-amazon.com/images/I/71o84Bphv-L.jpg",
      buyLink: "https://amzn.to/3YT6S6p"
    },
    {
      id: 3,
      name: "Royal Canin Puppy Medium 4kg",
      price: "₹3,776",
      image: "https://images-na.ssl-images-amazon.com/images/I/614A0idaTvL.jpg",
      buyLink: "https://amzn.to/4bz3W66"
    }
  ]

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>🐶 Best Dog Food in India (2026)</h1>

      <p style={{ maxWidth: "700px", marginTop: "10px", color: "#555" }}>
        We reviewed and compared the best dog food brands in India based on
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

export default BestDogFood
