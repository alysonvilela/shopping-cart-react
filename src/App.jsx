import { useState } from "react";
import logo from "./logo.svg";
import { Checkout } from "./pages/Checkout";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;
