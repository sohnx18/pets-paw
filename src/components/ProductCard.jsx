import { motion } from 'framer-motion'
import LazyImage from './LazyImage'
import { Link } from "react-router-dom";

const cardStyle = {
  width: '260px',
  border: '1px solid var(--primary-light)',
  borderRadius: 'var(--radius)',
  padding: '16px',
  background: 'var(--white)',
  boxShadow: 'var(--shadow)',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
}

function ProductCard({ name, price, image, buyLink, benefits = [] }) {
  return (
    <motion.div
      style={cardStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ translateY: -4, boxShadow: '0 8px 30px rgba(124,92,191,0.2)' }}
    >
      <div style={{ background: 'var(--bg)', borderRadius: '12px', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px', marginBottom: '12px' }}>
        <LazyImage
          src={image}
          alt={name}
          width={400}
          height={180}
          style={{ maxHeight: '160px', maxWidth: '100%', objectFit: 'contain' }}
        />
      </div>
      <div style={{ display: 'inline-block', background: 'var(--primary-light)', color: 'var(--primary)', fontSize: '10px', fontWeight: '700', padding: '3px 10px', borderRadius: '10px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        Pet Product
      </div>
      <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px', lineHeight: '1.4' }}>{name}</h3>
      {benefits.length > 0 && (
        <ul style={{ paddingLeft: '16px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '10px' }}>
          {benefits.slice(0, 3).map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      )}
      <p style={{ fontWeight: '700', fontSize: '13px', color: 'var(--primary)', marginBottom: '12px' }}>{price}</p>
      
      <a
        href={buyLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', textAlign: 'center', padding: '10px', background: 'linear-gradient(135deg, var(--primary), #9B7FD4)', color: '#fff', borderRadius: '12px', fontWeight: '700', fontSize: '13px', transition: 'opacity 0.2s', textDecoration: 'none' }}
        onMouseEnter={e => e.target.style.opacity = '0.9'}
        onMouseLeave={e => e.target.style.opacity = '1'}
      >
        Check on Amazon →
      </a>
    </motion.div>
  )
}

export default ProductCard
