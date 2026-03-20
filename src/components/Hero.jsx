import { Link } from "react-router-dom"

const sectionStyle = {
  padding: "100px 20px 80px", 
  textAlign: "center", 
  maxWidth: "1000px", 
  margin: "0 auto", 
  background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--bg) 100%)',
  borderRadius: 'var(--radius)',
  marginBottom: '40px',
  boxShadow: 'var(--shadow)'
}

const h1Style = {
  fontSize: "52px", 
  fontWeight: "900", 
  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '12px',
  lineHeight: '1.1'
}

const h2Style = {
  fontSize: "28px", 
  marginTop: "10px", 
  color: "var(--text)", 
  fontWeight: "700",
  marginBottom: '24px'
}

const pStyle = {
  marginBottom: "24px", 
  fontSize: "18px", 
  color: "var(--text-muted)", 
  lineHeight: "1.7",
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const tagsStyle = {
  marginTop: "20px", 
  display: "flex", 
  gap: "12px", 
  justifyContent: "center", 
  flexWrap: "wrap", 
  fontSize: "14px", 
  color: "var(--primary)"
}

const btnStyle = {
  padding: "16px 32px",
  fontSize: "18px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
  color: "var(--white)",
  fontWeight: "700",
  boxShadow: 'var(--shadow)',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  display: 'inline-block'
}

const buttonsStyle = { 
  marginTop: "40px", 
  display: "flex", 
  gap: "20px", 
  justifyContent: "center", 
  flexWrap: "wrap" 
}

const disclosureStyle = {
  marginTop: "40px", 
  fontSize: "13px", 
  color: "var(--text-muted)", 
  lineHeight: "1.5",
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export default function Hero() {
  return (
    <section style={sectionStyle}>
      <h1 style={h1Style}>
        Pets Paw ðŸ¾
      </h1>

      <h2 style={h2Style}>
        Everything your pet needs, in one place
      </h2>

      <p style={pStyle}>
        Safe, reviewed products for dogs and cats. Trusted recommendations from pet experts.
        Find food, toys, grooming supplies, and more â€“ all affiliate-compliant and vetted for quality.
      </p>

      <div style={tagsStyle}>
        <span>âœ“ Expert-reviewed</span>
        <span>âœ“ Affiliate-disclosure</span>
        <span>âœ“ No sponsored content</span>
      </div>

      <div style={buttonsStyle}>
        <Link to="/dogs" style={btnStyle}>ðŸ¶ Shop for Dogs</Link>
        <Link to="/cats" style={btnStyle}>ðŸ± Shop for Cats</Link>
        <Link to="/best-dog-food" style={btnStyle}>🥩 Best Dog Food</Link>
      </div>

      <p style={disclosureStyle}>
        *Pets Paw is an affiliate site. We may earn commissions from purchases made through our links at no extra cost to you.
        All recommendations are based on independent research and user reviews.
      </p>
    </section>
  )
}

