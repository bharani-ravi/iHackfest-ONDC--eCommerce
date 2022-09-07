import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import OrderPlaced from "./components/OrderPlaced";
import Product from "./components/Product";
import ViewProducts from "./pages/ViewProducts";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<OrderPlaced />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<ViewProducts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
