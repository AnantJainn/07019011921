import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} setProducts={setProducts} />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetails products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
