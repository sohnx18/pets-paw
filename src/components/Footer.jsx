const footerStyle = {
  background: 'var(--primary-dark)',
  color: 'var(--white)',
  padding: '60px 40px 40px',
  textAlign: 'center',
  marginTop: '80px',
}

const contentStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  fontSize: '15px',
  lineHeight: '1.6',
}

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginBottom: '30px',
  flexWrap: 'wrap',
}

const navLinkStyle = {
  color: 'var(--primary-light)',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.2s',
}

const linkStyle = {
  color: 'rgba(255,255,255,0.8)',
  textDecoration: 'underline',
  fontSize: '14px',
}

const dividerStyle = {
  height: '1px',
  background: 'rgba(255,255,255,0.1)',
  margin: '30px 0',
}

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--white)', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          Pets Paw 🐾
        </h3>
        
        <nav style={navStyle}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/dogs" style={navLinkStyle}>Dogs</a>
          <a href="/cats" style={navLinkStyle}>Cats</a>
          <a href="/best-dog-food" style={navLinkStyle}>Best Dog Food</a>
        </nav>

        <div style={dividerStyle}></div>

        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '20px' }}>
          © 2024 Pets Paw. All rights reserved. Expert-curated pet products with affiliate links.
        </p>

        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
          As an Amazon Associate, I earn from qualifying purchases.
        </p>
      </div>
    </footer>
  )
}

export default Footer

