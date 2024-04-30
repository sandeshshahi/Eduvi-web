import Account from "./Account";
import Cart from "./Cart";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import arrowDown from "../../../assets/icons/arrowDown.svg";
import { useState } from "react";

const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <header className="navBar">
        <div className="menu">
          <div>
            <NavLink to={"/"}>
              <Logo />
            </NavLink>
          </div>

          <div onClick={toggleClass} className="menu-btn">
            <span
              className={
                isActive ? "menu-btn__burger open" : "menu-btn__burger"
              }
            ></span>
          </div>
        </div>

        {isActive ? (
          <nav className={isActive ? "nav open" : null}>
            <ul className={isActive ? "menu-nav open" : null}>
              <li className={isActive ? "menu-nav__item open" : null}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "menu-nav__item-link"
                      : ""
                  }
                  to={"/shop"}
                >
                  Shop
                </NavLink>
              </li>
              <li
                className={isActive ? "menu-nav__item open" : null}
                style={{ display: "flex", gap: "4px" }}
              >
                <span>For Kindergarden</span>
                <img
                  height={24}
                  width={24}
                  src={arrowDown}
                  alt="arrow-down icon"
                />
              </li>
              <li
                className={isActive ? "menu-nav__item open" : null}
                style={{ display: "flex", gap: "4px" }}
              >
                <span>For High School</span>
                <img
                  height={24}
                  width={24}
                  src={arrowDown}
                  alt="arrow-down icon"
                />
              </li>
              <li
                className={isActive ? "menu-nav__item open" : null}
                style={{ display: "flex", gap: "4px" }}
              >
                <span>For College</span>
                <img
                  height={24}
                  width={24}
                  src={arrowDown}
                  alt="arrow-down icon"
                />
              </li>
              <li
                className={isActive ? "menu-nav__item open" : null}
                style={{ display: "flex", gap: "4px" }}
              >
                <span>Courses</span>
                <img
                  height={24}
                  width={24}
                  src={arrowDown}
                  alt="arrow-down icon"
                />
              </li>
              <ul className="menu-nav__item-AccountCart">
                <li className={isActive ? "menu-nav__item open" : null}>
                  <Cart />
                </li>
                <li className={isActive ? "menu-nav__item open" : null}>
                  <Account />
                </li>
              </ul>
            </ul>
          </nav>
        ) : (
          <nav className="nav">
            <ul className="menu-nav">
              <li className="menu-nav__item">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "menu-nav__item-link"
                      : ""
                  }
                  to={"/shop"}
                >
                  Shop
                </NavLink>
              </li>
              <li
                className="menu-nav__item"
                style={{ display: "flex", gap: "4px" }}
              >
                <span>For Kindergarden</span>
                <img
                  height={24}
                  width={24}
                  src={arrowDown}
                  alt="arrow-down icon"
                />
              </li>
              <li
                className="menu-nav__item"
                style={{ display: "flex", gap: "4px" }}
              >
                <span>For High School</span>
                <img
                  height={24}
                  width={24}
                  src={arrowDown}
                  alt="arrow-down icon"
                />
              </li>
              <li
                className="menu-nav__item"
                style={{ display: "flex", gap: "4px" }}
              >
                <span>For College</span>
                <img
                  height={24}
                  width={24}
                  src={arrowDown}
                  alt="arrow-down icon"
                />
              </li>
              <li
                className="menu-nav__item"
                style={{ display: "flex", gap: "4px" }}
              >
                <span>Courses</span>
                <img
                  height={24}
                  width={24}
                  src={arrowDown}
                  alt="arrow-down icon"
                />
              </li>
              <ul className="menu-nav__item-AccountCart">
                <li className="menu-nav__item">
                  <Cart />
                </li>
                <li className="menu-nav__item">
                  <Account />
                </li>
              </ul>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
export default NavBar;
