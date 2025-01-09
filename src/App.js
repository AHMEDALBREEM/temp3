import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/paradise-nursery/" element={<LandingPage />} />
            <Route
              path="/paradise-nursery/products"
              element={<ProductList />}
            />
            <Route path="/paradise-nursery/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
