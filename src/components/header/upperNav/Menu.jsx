/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import arrowDown from "../../../assets/icons/arrowDown.svg";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__list-item">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "menu__list-link" : ""
            }
            to={"/shop"}
          >
            Shop
          </NavLink>
        </li>
        <li className="menu__list-item">
          <span>For Kindergarden</span>
          <img height={24} width={24} src={arrowDown} alt="arrow-down icon" />
        </li>
        <li className="menu__list-item">
          <span>For High School</span>
          <img height={24} width={24} src={arrowDown} alt="arrow-down icon" />
        </li>
        <li className="menu__list-item">
          <span>For College</span>
          <img height={24} width={24} src={arrowDown} alt="arrow-down icon" />
        </li>
        <li className="menu__list-item">
          <span>Courses</span>
          <img height={24} width={24} src={arrowDown} alt="arrow-down icon" />
        </li>
      </ul>
    </div>
  );
};
export default Menu;
