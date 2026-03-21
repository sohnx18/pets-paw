import ProductCard from "../components/ProductCard";
import { catFoodAdult, catFoodKitten, catGrooming, catToys, catScratchers, catLitterBoxes } from "../data/products";

const containerStyle = {
  padding: "80px 40px",
  maxWidth: "1400px",
  margin: "0 auto",
  background: 'var(--bg)',
}

const h1Style = {
  fontSize: "44px",
  fontWeight: "900",
  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: "24px",
  lineHeight: '1.1'
}

const introStyle = {
  fontSize: "20px", 
  color: "var(--text-muted)", 
  marginBottom: "60px",
  maxWidth: '800px',
  lineHeight: '1.7'
}

const sectionStyle = {
  marginBottom: "80px",
  padding: '40px 0',
  borderBottom: '1px solid var(--primary-light)'
}

const headerStyle = {
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center", 
  marginBottom: "32px"
}

const h2Style = {
  fontSize: "28px", 
  fontWeight: "800", 
  color: "var(--text)"
}

const gridStyle = {
  display: "grid", 
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "32px"
}

function Cats() {
  const categories = [
    { title: "Adult Cat Food", products: catFoodAdult },
    { title: "Kitten Food", products: catFoodKitten },
    { title: "Grooming", products: catGrooming },
    { title: "Toys", products: catToys },
    { title: "Trees & Scratching Posts", products: catTreesScratching },
    { title: "Litter & Accessories", products: catLitter }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>ðŸ± Everything for Cats</h1>
      <p style={introStyle}>
        Premium food, toys, litter solutions and grooming essentials for your feline friends.
      </p>

      {categories.map((category, index) => (
        <section key={index} style={sectionStyle}>
          <div style={headerStyle}>
            <h2 style={h2Style}>{category.title}</h2>
          </div>

          <div style={gridStyle}>
            {category.products.slice(0, 4).map((product) => (
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

export default Cats;
