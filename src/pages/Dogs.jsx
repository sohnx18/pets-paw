import ProductCard from "../components/ProductCard";
import { dogFoodAdult, dogFoodPuppy, dogTreatsSupplements, dogGrooming, dogToys, dogLeashesCollars, dogBedsCrates } from "../data/products";

function Dogs() {
  const categories = [
    { title: "Adult Dog Food", products: dogFoodAdult, link: "/best-dog-food" },
    { title: "Puppy Food", products: dogFoodPuppy, link: "/best-puppy-food" },
    { title: "Treats & Supplements", products: dogTreatsSupplements },
    { title: "Grooming", products: dogGrooming },
    { title: "Toys", products: dogToys },
    { title: "Leashes, Collars & Harnesses", products: dogLeashesCollars },
    { title: "Beds & Crates", products: dogBedsCrates }
  ];

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>🐶 Everything for Dogs</h1>
      <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "40px" }}>
        Find the best food, toys, grooming supplies, and more for your canine companion.
      </p>

      {categories.map((category, index) => (
        <section key={index} style={{ marginBottom: "60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#374151" }}>{category.title}</h2>
            {category.link && (
              <a href={category.link} style={{ color: "#22c55e", textDecoration: "none", fontWeight: "500" }}>
                View All →
              </a>
            )}
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {category.products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                buyLink={product.buyLink}
                benefits={product.benefits || []}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Dogs;
