import ProductCard from "../components/ProductCard"

function Dogs() {
  const dogProducts = [
    {
      id: 1,
      name: "Pedigree Adult Dry Dog Food",
      price: "₹679",
      image: "https://m.media-amazon.com/images/I/712604bPj2L._SX425_.jpg",
      buyLink: "https://amzn.to/49pu56h"
    },
    {
      id: 2,
      name: "Chew Toy",
      price: "₹299",
      image: "https://via.placeholder.com/200",
      buyLink: "https://www.amazon.in"
    },
    {
      id: 3,
      name: "Dog Shampoo",
      price: "₹199",
      image: "https://via.placeholder.com/200",
      buyLink: "https://www.amazon.in"
    }
  ]

  return (
    <div style={{ padding: "60px" }}>
      <h1>🐶 Dogs</h1>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {dogProducts.map((product) => (
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

export default Dogs
