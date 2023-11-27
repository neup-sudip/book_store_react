import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Pagination from "../../common/Pagination";
import { ApiServices } from "../../utils/httpServices";
import BookCard from "./BookCard";

const BookList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const getBooks = async (query, page) => {
    const { data, success, message } = await ApiServices.get({
      url: `/books?query=${query}&page=${page}`,
    });

    if (success) {
      setBooks(data?.books);
      setTotalPages(data?.totalPages);
    } else {
      console.log(message);
    }
  };

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    const page = parseInt(searchParams.get("page") ?? 1);
    setCurrentPage(page);
    setSearchQuery(query);
    getBooks(query, page);
    //eslint-disable-next-line
  }, [searchParams]);

  const handlePageChange = (newPage) => {
    setSearchParams({ query: searchQuery, page: newPage });
  };

  return (
    <div>
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

      <Pagination
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default BookList;
