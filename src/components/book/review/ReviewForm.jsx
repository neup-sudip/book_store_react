/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ApiServices } from "../../../utils/httpServices";
import {
  emitErrorToast,
  emitSuccessToast,
} from "../../../common/toast/EmitToast";

const ReviewForm = ({ bookId, prevReview, setReviews, setEditModel }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    const { data, success, message } = await ApiServices.post({
      url: "/reviews",
      data: { bookId, rating, comment },
    });

    if (success) {
      emitSuccessToast(message);
      setReviews(data);
      setEditModel && setEditModel(false);
    } else {
      emitErrorToast(message);
    }
  };

  useEffect(() => {
    if (prevReview) {
      setComment(prevReview?.comment);
      setRating(prevReview?.rating);
    }
  }, [prevReview]);

  return (
    <div className="form-group m-2 bg-info-subtle rounded-1 ">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => setRating(num)}
          type="button"
          className={`btn btn-lg text-dark me-1  ${
            rating >= num ? "bg-warning" : "bg-light"
          }`}
        >
          <i className="fa fa-star" aria-hidden="true"></i>
        </button>
      ))}
      <div className="d-flex justify-content-between align-items-center mt-2  ">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Write a review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
