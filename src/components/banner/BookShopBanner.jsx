import { NavLink } from "react-router-dom";
import bookcaseImage from "../../assets/images/bookcase.png";

const BookShopBanner = () => {
  return (
    <div className="bookShopBanner">
      <ul className="bookShopBanner__link">
        <li role="listitem" className="bookShopBanner__link-home">
          <NavLink to={"/"}>Home</NavLink>{" "}
        </li>
        <li role="listitem">|</li>
        <li role="listitem" className="bookShopBanner__link-shop active">
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
      </ul>
      <div>
        <div className="bookShopBanner-content">
          <p className="bookShopBanner-p">
            Eduvi Online <br /> Book Shop
          </p>
          <img
            className="bookShopBanner-image"
            src={bookcaseImage}
            alt="bookcase"
          />
        </div>
      </div>
    </div>
  );
};
export default BookShopBanner;
