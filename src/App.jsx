import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sections from "./components/Sections"
import Footer from "./components/Footer"

import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"
import BestDogFood from "./pages/BestDogFood"
import BestPuppyFood from "./pages/BestPuppyFood"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Sections />
            </>
          }
        />

        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />

        {/* SEO money pages */}
        <Route path="/best-dog-food" element={<BestDogFood />} />
        <Route path="/best-puppy-food" element={<BestPuppyFood />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
