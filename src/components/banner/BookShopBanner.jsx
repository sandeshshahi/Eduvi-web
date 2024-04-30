import { NavLink } from "react-router-dom";
import bookcaseImage from "../../assets/images/bookcase.png";

const BookShopBanner = () => {
  return (
    <div className="bookShopBanner">
      <ul className="bookShopBanner__link">
        <li
          aria-labelledby=" navigate to home"
          aria-describedby="navigate to home"
          role="listitem"
          className="bookShopBanner__link-home"
        >
          <NavLink to={"/"}>Home</NavLink>{" "}
        </li>
        <li role="listitem">|</li>
        <li
          aria-labelledby=" navigate to shop"
          aria-describedby="navigate to shop"
          role="listitem"
          className="bookShopBanner__link-shop active"
        >
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
      </ul>
      <div>
        <div className="bookShopBanner-content">
          <p
            aria-labelledby=" eduvi title"
            aria-describedby="eduvi title"
            className="bookShopBanner-p"
          >
            Eduvi Online <br /> Book Shop
          </p>
          <div className="bookShopBanner-container">
            <img
              className="bookShopBanner-container-image"
              src={bookcaseImage}
              alt="bookcase"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookShopBanner;
