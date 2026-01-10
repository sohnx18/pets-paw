import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sections from "./components/Sections"
import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"

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
      </Routes>
    </>
  )
}

export default App
