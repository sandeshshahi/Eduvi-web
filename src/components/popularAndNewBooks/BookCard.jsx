/* eslint-disable react/prop-types */

const BookCard = ({ title, author, image }) => {
  return (
    <>
      <div className="bookCard__small-wrapper">
        <img src={image} className="bookCard__small-wrapper-img" />
        <div className="bookCard__small-wrapper-text">
          <div className="bookCard__small-wrapper-stars">
            {[...Array(5)].map((i) => {
              return (
                <span className="bookCard__small-wrapper-star" key={i}>
                  &#9733;
                </span>
              );
            })}
          </div>
          <p className="bookCard__small-wrapper-title">
            {title}, by {author}
          </p>

          <p className="bookCard__small-wrapper-price">$39.00</p>
        </div>
      </div>
    </>
  );
};

export default BookCard;
