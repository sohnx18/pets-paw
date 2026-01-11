import ProductCard from "../components/ProductCard";

function Cats() {
  const catProducts = [
    {
      id: 1,
      name: "Whiskas Adult Dry Cat Food (Ocean Fish)",
      price: "₹ 990",
      image: "https://m.media-amazon.com/images/I/81UFCQjgO3L._SX425_.jpg",
      buyLink: "https://amzn.to/49x1Tgr"
    },
    {
      id: 2,
      name: "Foodie Puppies Cat Litter Sand",
      price: "₹ 249",
      image: "https://m.media-amazon.com/images/I/81lrQ93A10L._SY355_.jpg",
      buyLink: "https://amzn.to/45Dydgp"
    },
    {
      id: 3,
      name: "Emily Pets Cat Scratcher",
      price: "₹ 281",
      image: "https://m.media-amazon.com/images/I/714BJl77PGL._SX425_.jpg",
      buyLink: "https://amzn.to/4sP4yLo"
    }
  ];

  return (
    <div style={{ padding: "60px" }}>
      <h1>🐱 Cats</h1>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {catProducts.map((product) => (
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
  );
}

export default Cats;
