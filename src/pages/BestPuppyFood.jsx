import ProductCard from "../components/ProductCard"

function BestPuppyFood() {
  const puppyFoods = [
    {
      id: 1,
      name: "Pedigree Puppy Chicken & Milk 3kg",
      price: "₹729",
      image: new URL('/images/pedigree-puppy.jpg', import.meta.url).href,
      buyLink: "https://www.amazon.in/s?k=Pedigree+Puppy+Chicken+Milk+3kg"
    },
    {
      id: 2,
      name: "Drools Puppy Dry Dog Food 3kg",
      price: "₹799",
      image: new URL('/images/drools-puppy.jpg', import.meta.url).href,
      buyLink: "https://www.amazon.in/s?k=Drools+Puppy+Dry+Dog+Food+3kg"
    },
    {
      id: 3,
      name: "Royal Canin Puppy Medium 4kg",
      price: "₹2,390",
      image: new URL('/images/royal-canin-puppy.webp', import.meta.url).href,
      buyLink: "https://www.amazon.in/s?k=Royal+Canin+Puppy+Medium+4kg"
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
