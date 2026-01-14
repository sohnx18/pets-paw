


function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      {/* Logo / Site Title */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#000",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        Pets Paw 🐾
      </Link>

      {/* Menu */}
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
