import BookCard from "./BookCard";
import { books } from "../../data/shopData";
const PopularBook = () => {
  return (
    <div className="bookPage__left">
      <h1 className="bookPage__left-heading">Popular Books</h1>
      {books.slice(0, 3).map((item) => (
        <BookCard
          title={item.title}
          author={item.author}
          image={item.image}
          key={item.id}
        />
      ))}
      <a className="bookPage__left-seeMore" href="">
        See More
      </a>
    </div>
  );
};
export default PopularBook;
