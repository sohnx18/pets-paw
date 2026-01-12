import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div style={{ padding: 60, textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>Sorry — the page you tried doesn't exist. <Link to="/">Go home</Link></p>
    </div>
  )
}
