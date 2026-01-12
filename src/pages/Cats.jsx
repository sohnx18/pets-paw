import ProductCard from "../components/ProductCard";
import { cats } from "../data/products";

function Cats() {
  const catProducts = cats;

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
