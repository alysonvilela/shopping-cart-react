import { createContext, useState, useCallback } from "react";
import logo from "./logo.svg";
import { Checkout } from "./pages/Checkout";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Routes, Route, Outlet } from "react-router-dom";

export const BuyContext = createContext({});
const selectedProductsIds = new Set();

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState([]);

  const handleSelect = useCallback(
    (id, isSelected) => {
      if (isSelected) {
        selectedProductsIds.delete(id);
      } else selectedProductsIds.add(id);

      const arr = Array.from(selectedProductsIds);
      setCartItems(arr);
    },
    [setCartItems]
  );

  return (
    <BuyContext.Provider
      value={{ cartItems, setCartItems, productList, setProductList }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home handleSelect={handleSelect} setArr={selectedProductsIds}/>} />
          <Route path="cart" element={<Cart handleSelect={handleSelect} />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BuyContext.Provider>
  );
}

export default App;
