/* eslint-disable react/prop-types */
const ShopCard = ({ item }) => {
  return (
    <div className="shopCard__book" key={item.id}>
      <div className="shopCard__book-imageWrapper">
        <img className="shopCard__book-image" src={item.image} />
      </div>
      <p className="shopCard__book-title">{item.title}</p>
      <div className="shopCard__book-priceAndStar">
        <p className="shopCard__book-priceAndStar-price">$40</p>
        <div className="shopCard__book-priceAndStar-stars">
          {[...Array(5)].map((i) => {
            return (
              <span className="shopCard__book-priceAndStar-stars-star" key={i}>
                &#9733;
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ShopCard;
