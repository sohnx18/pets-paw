import ProductCard from "../components/ProductCard";
import { dogs } from "../data/products";

function Dogs() {
  const dogProducts = dogs;

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
  );
}

export default Dogs;
