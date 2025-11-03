import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Products } from "../constants/products";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import "./../styles/App.css";

function App() {
  const [products, setProducts] = useState(Products);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/admin">Admin Panel</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route
          path="/admin"
          element={<AdminPanel products={products} setProducts={setProducts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
