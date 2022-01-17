import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { BuyContext } from "../../App";
import { Header } from "../Header";

export const Layout = () => {
  const {cartItems} = useContext(BuyContext)

  return (
    <>
      <Header cart={cartItems} />
      <body className="text-secondary-11">
        <Outlet />
      </body>
    </>
  );
};
