import styled from 'styled-components'
import { motion } from 'framer-motion'
import LazyImage from './LazyImage'

const Card = styled(motion.div)`
  width: 260px;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const ProductImage = styled(LazyImage)`
  width: 100%;
  height: 200px;
  object-fit: contain;
  min-height: 120px;
  background: #fff;
`

const ProductTitle = styled.h3`
  margin-top: 12px;
  font-size: 16px;
`

const ProductPrice = styled.p`
  font-weight: bold;
  margin-top: 8px;
`

const BuyButton = styled.a`
  display: block;
  margin-top: 12px;
  text-align: center;
  padding: 10px;
  background: #ff9900;
  color: #000;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: #e68a00;
  }
`

const AffiliateDisclosure = styled.small`
  display: block;
  margin-top: 8px;
  font-size: 11px;
  color: #666;
  text-align: center;
  line-height: 1.3;
`

function ProductCard({ name, price, image, buyLink }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "image": image,
    "offers": {
      "@type": "Offer",
      "price": price.replace(/[^\d.]/g, ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": buyLink,
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
    >
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <ProductImage
        src={image}
        alt={name}
        width={400}
        height={200}
      />

      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>

      <BuyButton
        href={buyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy on Amazon
      </BuyButton>
    </Card>
  )
}

export default ProductCard
