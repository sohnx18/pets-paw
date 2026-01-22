import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

// Lazy load pages for code splitting
const BestDogFood = lazy(() => import("./pages/BestDogFood"));
const BestPuppyFood = lazy(() => import("./pages/BestPuppyFood"));
const BestCatFood = lazy(() => import("./pages/BestCatFood"));
const Dogs = lazy(() => import("./pages/Dogs"));
const Cats = lazy(() => import("./pages/Cats"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      {/* <HelmetProvider> */}
        <Router>
          <Navbar />
          <h1>App is rendering</h1>
          <Suspense fallback={<div style={{ padding: '60px', fontSize: '24px', color: 'red' }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<BestDogFood />} />
              <Route path="/dogs" element={<Dogs />} />
              <Route path="/cats" element={<Cats />} />
              <Route path="/best-dog-food" element={<BestDogFood />} />
              <Route path="/best-puppy-food" element={<BestPuppyFood />} />
              <Route path="/best-cat-food" element={<BestCatFood />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      {/* </HelmetProvider> */}
    </ErrorBoundary>
  );
}

export default App;
