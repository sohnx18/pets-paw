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
        Looking for the best dog food in India? We reviewed top brands like
        Pedigree, Drools and Royal Canin based on nutrition, ingredients,
        price and customer reviews to help you choose the healthiest food
        for your dog.
      </p>

      <div
        style={{
          display: "flex",
          gap: "24px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >
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
        <h2>How to choose the best dog food in India?</h2>
        <p>
          Choosing the right dog food is one of the most important decisions
          for your pet’s health. Indian dogs need food that is high in protein,
          easy to digest, and suitable for our climate.
        </p>

        <p>
          Always choose dog food that has chicken, eggs or fish as the first
          ingredient. Avoid foods full of corn, wheat and soy, as they provide
          low nutrition and may cause allergies.
        </p>

        <h2>Why dry dog food is best for Indian dogs</h2>
        <p>
          Dry dog food (kibble) is affordable, easy to store, and helps keep
          teeth clean. Brands like Pedigree, Drools and Royal Canin are specially
          made for Indian dogs.
        </p>

        <h2>Royal Canin vs Pedigree vs Drools</h2>
        <p>
          Royal Canin is premium and best for puppies and sensitive dogs.
          Pedigree and Drools are budget-friendly and perfect for daily feeding.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Which is the best dog food brand in India?</h3>
        <p>
          Royal Canin, Pedigree and Drools are among the most trusted dog food
          brands in India.
        </p>

        <h3>Is dry food healthy for dogs?</h3>
        <p>
          Yes. High-quality dry food provides complete nutrition when fed in
          proper quantity.
        </p>

        <h3>How much food should I give my dog?</h3>
        <p>
          Adult dogs usually need 2–3 cups of dry food daily depending on size
          and activity level.
        </p>
      </div>
    </div>
  )
}

export default BestDogFood
