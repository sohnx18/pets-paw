import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 60px",
      borderBottom: "1px solid #eaeaea"
    }}>
      
      <h2>Pets Paw 🐾</h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/dogs" style={{ textDecoration: "none", color: "#333" }}>
          Dogs
        </Link>
        <Link to="/cats" style={{ textDecoration: "none", color: "#333" }}>
          Cats
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
