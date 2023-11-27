/* eslint-disable react/prop-types */
const Pagination = ({ currentPage = 1, setCurrentPage, totalPages }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className={`page-item ${currentPage <= 1 && "disabled"}`}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="page-link"
          >
            Previous
          </button>
        </li>
        {currentPage >= 2 && (
          <li className="page-item">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="page-link"
            >
              {currentPage - 1}
            </button>
          </li>
        )}

        <li className="page-item">
          <button
            onClick={() => setCurrentPage(currentPage)}
            className="page-link bg-primary-subtle "
          >
            {currentPage}
          </button>
        </li>

        {currentPage <= totalPages - 1 && (
          <li className="page-item">
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="page-link"
            >
              {currentPage + 1}
            </button>
          </li>
        )}

        <li className={`page-item ${currentPage >= totalPages && "disabled"}`}>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
