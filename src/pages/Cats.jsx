import ProductCard from "../components/ProductCard"

function Cats() {
  const catProducts = [
    {
      id: 1,
      name: "Cat Food",
      price: 699,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Cat Toy",
      price: 249,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Cat Litter",
      price: 399,
      image: "https://via.placeholder.com/200"
    }
  ]

  return (
    <div style={{ padding: "60px" }}>
      <h1>🐱 Cats</h1>

      <div style={{
        marginTop: "30px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {catProducts.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Cats
const catProducts = [
  {
    id: 1,
    name: "Cat Food",
    price: 699,
    image: "https://via.placeholder.com/200",
    buyLink: "https://www.amazon.in"
  },
  {
    id: 2,
    name: "Cat Toy",
    price: 249,
    image: "https://via.placeholder.com/200",
    buyLink: "https://www.amazon.in"
  },
  {
    id: 3,
    name: "Cat Litter",
    price: 399,
    image: "https://via.placeholder.com/200",
    buyLink: "https://www.amazon.in"
  }
]
