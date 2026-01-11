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
    name: "Whiskas Adult (1+ Years) Dry Cat Food, Ocean Fish Flavour, 3 kg, Contains 41 Essential Nutrients, Complete & Balanced Nutrition for Adult Cats",
    price: 990,
    image: "https://m.media-amazon.com/images/I/81UFCQjgO3L._SX425_.jpg"
    buyLink: "https://amzn.to/49x1Tgr"
  },
  {
    id: 2,
    name: "Foodie Puppies Natural Bentonite Cat Litter Sand",
    price: 249,
    image: "https://m.media-amazon.com/images/I/81lrQ93A10L._SY355_.jpg",
    buyLink: "https://amzn.to/45Dydgp"
  },
  {
    id: 3,
    name: "Emily Pets Cat Scratcher Cardboard 2 in 1 Reversible Scratching Pad Recyclable Corrugated Scratch Toy with Wave Shape & 10ML Catnip Cat Scratch Lounge for Furniture Protection Scratch Board",
    price: 281,
    image: "https://m.media-amazon.com/images/I/714BJl77PGL._SX425_.jpg",
    buyLink: "https://amzn.to/4sP4yLo"
  }
]
