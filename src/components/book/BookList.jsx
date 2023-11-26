import { useEffect, useState } from "react";
import BookCard from "./BookCard.jsx";
import { Link } from "react-router-dom";
import { ApiServices } from "../../utils/httpServices.js";
import { emitErrorToast } from "../../common/toast/EmitToast.js";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const { data, message, success } = await ApiServices.get({
      url: "/books",
    });

    if (success) {
      setBooks(data);
    } else {
      emitErrorToast(message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className=" mt-2">
      <div className="d-flex justify-content-between align-items-center">
        <h1>List of Books</h1>
        <Link
          className="bg-primary text-white rounded-1 px-1 link-underline"
          to="/books/add"
        >
          Add new Book
        </Link>
      </div>

      {books?.length > 0 ? (
        <div className="row gy-2 text-white">
          {books?.map((book, idx) => (
            <BookCard key={idx} book={book} />
          ))}
        </div>
      ) : (
        <p>No Book found</p>
      )}
    </div>
  );
};

export default BookList;
