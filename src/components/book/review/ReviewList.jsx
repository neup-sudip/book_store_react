/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

const ReviewList = ({ reviews, setReviews, profile, bookId }) => {
  const [perRating, setPerRating] = useState({});
  const [totalNumRating, setTotalNumRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [reviewList, setReviewList] = useState([]);
  const [prevReview, setPrevReview] = useState("");

  const [editModel, setEditModel] = useState(false);

  const labels = ["Excellent", "Good", "Average", "Poor", "Terrible"];

  const handleReviews = () => {
    let totalNumRate = 0;
    let totalRate = 0;
    let perRate = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    let otherReviews = [];

    reviews?.forEach((review) => {
      perRate[review?.rating] += 1;
      totalNumRate += 1;
      totalRate += review?.rating;
      if (review?.userId === profile?.userId) {
        setPrevReview(review);
      } else {
        otherReviews.push(review);
      }
    });

    setReviewList(otherReviews);
    setPerRating(perRate);
    setAverageRating(totalRate / totalNumRate);
    setTotalNumRating(totalNumRate);
  };

  useEffect(() => {
    if (reviews) handleReviews();
  }, [reviews]);

  return (
    <div className="container-fluid px-1 mx-auto">
      <h4 className="ms-2">Rating and Reviews</h4>
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center">
          <div className="card-c">
            <div className="row justify-content-left d-flex">
              <div className="col-md-4 d-flex flex-column">
                <div className="rating-box">
                  <h1 className="pt-4">{averageRating.toFixed(2)}</h1>
                  <p className="">out of 5</p>
                </div>
                <div>
                  <span className="fa fa-star star-active mx-1"></span>
                  <span className="fa fa-star star-active mx-1"></span>
                  <span className="fa fa-star star-active mx-1"></span>
                  <span className="fa fa-star star-active mx-1"></span>
                  <span className="fa fa-star star-inactive mx-1"></span>
                  <span>{`(${totalNumRating})`}</span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="rating-bar0 justify-content-center">
                  <div className="text-left mx-auto">
                    {labels?.map((label, idx) => (
                      <div key={idx} className="row">
                        <div className="w-25 text-start ">{label}</div>
                        <div className="w-50 mt-2 bg-dark-subtle rounded-5 p-0 w">
                          <div
                            className="bg-warning rounded-5 py-2"
                            style={{
                              width: `${
                                (perRating[5 - idx] / totalNumRating) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <div className="w-25">{perRating[5 - idx]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {prevReview ? (
        <div>
          <button
            type="button"
            onClick={() => setEditModel(true)}
            className="btn btn-primary ms-2"
          >
            Edit Your Review
          </button>
          {editModel ? (
            <ReviewForm
              bookId={bookId}
              prevReview={prevReview}
              setReviews={(data) => setReviews([...reviewList, data])}
              setEditModel={setEditModel}
            />
          ) : (
            <div className="col-sm-10 bg-success rounded-1 ">
              <ReviewCard review={prevReview} />
            </div>
          )}
        </div>
      ) : (
        <ReviewForm
          bookId={bookId}
          setReviews={(data) => setReviews([...reviewList, data])}
        />
      )}

      <div className="col-sm-10">
        {/* <div className="review-block"> */}
        {reviewList &&
          reviewList?.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ReviewList;
