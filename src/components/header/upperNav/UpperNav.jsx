/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import Account from "./Account";
import Cart from "./Cart";
import Logo from "./Logo";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import NavForSmallDevices from "./NavForSmallDevices";

const UpperNav = () => {
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    setResponsive(matchMedia("(max-width: 1024px)").matches);
  }, []);

  return (
    <>
      {responsive ? (
        <NavForSmallDevices />
      ) : (
        <nav className="navBar">
          <NavLink to={"/"}>
            <Logo height={30} width={25} />
          </NavLink>
          <Menu />

          <div className="cart-account">
            <Cart />
            <Account />
          </div>
        </nav>
      )}
    </>
  );
};
export default UpperNav;
