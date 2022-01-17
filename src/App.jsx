import { createContext, useState, useCallback } from "react";
import logo from "./logo.svg";
import { Checkout } from "./pages/Checkout";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

export const BuyContext = createContext({});
const selectedProductsIds = new Set();

function App() {
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
      value={{
        cartItems,
        setCartItems,
        productList,
        setProductList,
        handleSelect,
        setArr: selectedProductsIds,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={<PrivateRoute auth={cartItems.length > 0} href="/" />}
          >
          <Route
            path=""
            element={<Checkout />}
          /></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BuyContext.Provider>
  );
}

function PrivateRoute({ auth, href }) {
  return auth ? <Outlet /> : <Navigate to={href} />;
}

export default App;
