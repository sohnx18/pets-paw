import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sections from "./components/Sections"
import Footer from "./components/Footer"

import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"
import BestDogFood from "./pages/BestDogFood"
import BestPuppyFood from "./pages/BestPuppyFood"
import BestCatFood from "./pages/BestCatFood"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Sections />
            </>
          }
        />

        {/* Store pages */}
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />

        {/* SEO Money Pages */}
        <Route path="/best-dog-food" element={<BestDogFood />} />
        <Route path="/best-puppy-food" element={<BestPuppyFood />} />
        <Route path="/best-cat-food" element={<BestCatFood />} />

        {/* Fallback */}
        <Route path="*" element={<div style={{ padding: 60, textAlign: 'center' }}><h1>Page not found</h1><p><a href="/">Return home</a></p></div>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
