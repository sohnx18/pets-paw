import ProductCard from "../components/ProductCard"

function BestPuppyFood() {
  const puppyFoods = [
    {
      id: 1,
      name: "Pedigree Puppy Chicken & Milk 3kg",
      price: "₹729",
      image: "https://m.media-amazon.com/images/I/71bT2f8oYUL._SX425_.jpg",
      buyLink: "https://amzn.to/4jAjgSc"
    },
    {
      id: 2,
      name: "Drools Puppy Dry Dog Food 3kg",
      price: "₹799",
      image: "https://m.media-amazon.com/images/I/71o84Bphv-L._SY355_.jpg",
      buyLink: "https://amzn.to/49pu56h"
    },
    {
      id: 3,
      name: "Royal Canin Puppy Medium 4kg",
      price: "₹2,390",
      image: "https://m.media-amazon.com/images/I/71bq+vVZ0mL._SX425_.jpg",
      buyLink: "https://amzn.to/4qhzJxa"
    }
  ]

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        🐶 Best Puppy Food in India (2026)
      </h1>

      <p style={{ color: "#555", marginBottom: "40px" }}>
        We compared nutrition, price and reviews to find the best puppy foods for healthy growth.
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {puppyFoods.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            buyLink={product.buyLink}
          />
        ))}
      </div>

    </div>
  )
}

export default BestPuppyFood
