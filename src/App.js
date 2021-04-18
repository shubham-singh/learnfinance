import "./styles.css";
// import setUpServer from "./api/mock.server";

// import Navbar from "./Navbar";
import NavLayout from "./Navigation/NavLayout";
import ProductList from "./Product/ProductList";
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";

import { Routes, Route } from "react-router-dom";

// setUpServer();

export default function App() {
  return (
    <div className="App">
      <NavLayout />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}
