import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BestDogFood from "./pages/BestDogFood";
import BestPuppyFood from "./pages/BestPuppyFood";
import BestCatFood from "./pages/BestCatFood";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BestDogFood />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/best-dog-food" element={<BestDogFood />} />
        <Route path="/best-puppy-food" element={<BestPuppyFood />} />
        <Route path="/best-cat-food" element={<BestCatFood />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
