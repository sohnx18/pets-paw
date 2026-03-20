import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 60px",
  background: 'var(--white)',
  borderBottom: "1px solid var(--primary-light)",
  boxShadow: 'var(--shadow)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
}

const logoStyle = {
  textDecoration: "none",
  color: "var(--primary)",
  fontSize: "24px",
  fontWeight: "800",
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}

const linkStyle = {
  textDecoration: "none", 
  color: "var(--text)",
  fontWeight: '600',
  fontSize: '16px',
  padding: '8px 16px',
  borderRadius: '12px',
  transition: 'all 0.2s',
}

const menuStyle = { 
  display: "flex", 
  gap: "20px" 
};

function Navbar() {
  return (
    <nav style={navStyle}>
      {/* Logo / Site Title */}
      <Link to="/" style={logoStyle}>
        Pets Paw ðŸ¾
      </Link>

      {/* Menu */}
      <div style={menuStyle}>
        <Link to="/dogs" style={linkStyle}>
          ðŸ¶ Dogs
        </Link>
        <Link to="/cats" style={linkStyle}>
          ðŸ± Cats
        </Link>
        <Link to="/best-dog-food" style={linkStyle}>
          🥩 Best Dog Food
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

