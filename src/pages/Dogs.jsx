import ProductCard from "../components/ProductCard"

function Dogs() {
  const dogProducts = [
    {
      id: 1,
      name: "Pedigree Adult Dry Dog Food",
      price: 679,
      image: "https://m.media-amazon.com/images/I/712604bPj2L._SX425_.jpg",
      buyLink: "https://amzn.to/49pu56h"
    },
    {
      id: 2,
      name: "Drools Adult Dry Dog Food",
      price: 722,
      image: "https://m.media-amazon.com/images/I/71o84Bphv-L._SY355_.jpg",
      buyLink: "https://amzn.to/4jAjgSc"
    },
    {
      id: 3,
      name: "AmazonBasics Dog Rope Toy",
      price: 179,
      image: "https://m.media-amazon.com/images/I/71kjtvLNy4L._SX425_.jpg",
      buyLink: "https://amzn.to/4qhzJxa"
    },
    {
      id: 4,
      name: "Himalaya Erina-EP Shampoo",
      price: 243,
      image: "https://m.media-amazon.com/images/I/51UYPTXkUhL._SY355_.jpg",
      buyLink: "https://amzn.to/4qfROeV"
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
