import { createContext, useState } from "react";
import logo from "./logo.svg";
import { Checkout } from "./pages/Checkout";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Routes, Route, Outlet } from "react-router-dom";

export const BuyContext = createContext({});

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <BuyContext.Provider value={{ cartItems, setCartItems }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BuyContext.Provider>
  );
}

export default App;
