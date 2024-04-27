import bookcaseImage from "../../assets/images/bookcase.png";

const BookShopBanner = () => {
  return (
    <div className="bookShopBanner">
      <ul className="bookShopBanner__link">
        <li className="">Home</li>
        <li>|</li>
        <li className=" active">Shop</li>
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
