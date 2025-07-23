import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.slice(20, 45).map((libri) => (
        <SingleBook key={libri.id} libri={libri} />
      ))}
    </div>
  );
};

export default BookList;
