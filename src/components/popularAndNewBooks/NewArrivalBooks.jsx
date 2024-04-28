import BookCard from "./BookCard";
import { books } from "../../data/shopData";

const NewArrivalBooks = () => {
  return (
    <>
      {books.slice(0, 3).map((item) => (
        <BookCard
          title={item.title}
          author={item.author}
          image={item.image}
          key={item.id}
        />
      ))}
    </>
  );
};
export default NewArrivalBooks;
