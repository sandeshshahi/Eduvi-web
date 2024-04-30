import BookCard from "./BookCard";
import { books } from "../../data/shopData";
const PopularBook = () => {
  return (
    <div className="bookPage__left">
      <h1
        aria-labelledby=" heading popular books"
        aria-describedby="heading popular books"
        className="bookPage__left-heading"
      >
        Popular Books
      </h1>
      <div className="bookPage__left-items">
        {books.slice(0, 3).map((item) => (
          <BookCard
            title={item.title}
            author={item.author}
            image={item.image}
            key={item.id}
          />
        ))}
      </div>

      <a
        aria-labelledby=" see more link"
        aria-describedby="see more link"
        className="bookPage__left-seeMore"
        href=""
      >
        See More
      </a>
    </div>
  );
};
export default PopularBook;
