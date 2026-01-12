import { useEffect } from "react"
import ProductCard from "../components/ProductCard"

function BestDogFood() {
  useEffect(() => {
    document.title = "Best Dog Food in India (2026) | Pets Paw"
  }, [])

  const products = [
    {
      id: 1,
      name: "Pedigree Adult Dry Dog Food (3kg)",
      price: "₹ 679",
      image: "https://images-na.ssl-images-amazon.com/images/I/712604bPj2L.jpg",
      buyLink: "https://amzn.to/yourlink1"
    },
    {
      id: 2,
      name: "Drools Adult Dry Dog Food",
      price: "₹ 722",
      image: "https://images-na.ssl-images-amazon.com/images/I/71o84Bphv-L.jpg",
      buyLink: "https://amzn.to/3YT6S6p"
    },
    {
      id: 3,
      name: "Royal Canin Puppy Medium 4kg",
      price: "₹ 3,776",
      image: "https://images-na.ssl-images-amazon.com/images/I/614A0idaTvL.jpg",
      buyLink: "https://amzn.to/4bz3W66"
    }
  ]

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>

      <h1>🐶 Best Dog Food in India (2026)</h1>

      <p style={{ maxWidth: "700px", marginTop: "10px", color: "#555" }}>
        Looking for the best dog food in India? We reviewed Pedigree, Drools and Royal Canin
        based on nutrition, ingredients, price and thousands of customer reviews to help
        you choose the healthiest food for your dog.
      </p>

      {/* Comparison Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "40px" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Brand</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Best For</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Price</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Pedigree</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Daily nutrition</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>₹679</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              <a href="https://amzn.to/yourlink1" target="_blank">Check price</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Drools</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>High protein</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>₹722</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              <a href="https://amzn.to/3YT6S6p" target="_blank">Check price</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Royal Canin</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Premium care</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>₹3,776</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              <a href="https://amzn.to/4bz3W66" target="_blank">Check price</a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Product Cards */}
      <div style={{ display: "flex", gap: "24px", marginTop: "40px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            buyLink={p.buyLink}
          />
        ))}
      </div>

      {/* SEO Content */}
      <div style={{ marginTop: "60px", maxWidth: "800px", lineHeight: "1.7" }}>
        <h2>Why these are the best dog foods in India</h2>
        <p>
          We selected these brands based on ingredient quality, protein content,
          digestibility and thousands of verified Amazon reviews from Indian pet owners.
        </p>

        <p>
          Low-quality dog food can cause allergies, stomach issues and weak immunity.
          These brands provide balanced nutrition for Indian dogs.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Which is the best dog food in India?</h3>
        <p>
          Pedigree and Drools are best for daily feeding. Royal Canin is ideal for puppies
          and dogs with special health needs.
        </p>

        <h3>Is dry food healthy for dogs?</h3>
        <p>
          Yes. High-quality dry food provides complete nutrition and helps maintain dental health.
        </p>

        <h3>How much dog food should I give?</h3>
        <p>
          Most adult dogs need 2–3 cups of dry food daily depending on size and activity.
        </p>

        <p style={{ marginTop: "40px", fontSize: "14px", color: "#777" }}>
          Pets Paw is supported by readers. As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>

    </div>
  )
}

export default BestDogFood
