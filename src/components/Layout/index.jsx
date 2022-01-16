import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { BuyContext } from "../../App";
import { Header } from "../Header";

export const Layout = (children) => {
  const {cartItems} = useContext(BuyContext)

  return (
    <>
      <Header cart={cartItems} />
      <body>
        <Outlet />
      </body>
    </>
  );
};
