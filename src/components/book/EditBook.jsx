import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiServices } from "../../utils/httpServices";
import { emitErrorToast } from "../../common/toast/EmitToast";
import BookForm from "./BookForm";

const EditBook = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState(null);

  const getBook = async () => {
    const { data, success, message } = await ApiServices.get(`/books/${slug}`);

    if (success) {
      setBookData(data);
    } else {
      emitErrorToast(message);
      navigate("/books");
    }
  };

  useEffect(() => {
    if (slug) {
      getBook();
    }
    //eslint-disable-next-line
  }, [slug]);
  if (bookData) return <BookForm editBook={bookData} />;
};

export default EditBook;
