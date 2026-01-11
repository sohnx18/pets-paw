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

      {/* LOGO */}
      <Link 
        to="/" 
        style={{ textDecoration: "none", color: "black" }}
      >
        <h2 style={{ cursor: "pointer" }}>
          Pets Paw 🐾
        </h2>
      </Link>

      {/* MENU */}
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
