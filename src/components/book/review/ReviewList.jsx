/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import "./reviewcard.css";

const ReviewList = ({ reviews }) => {
  const [perRating, setPerRating] = useState({});
  const [totalNumRating, setTotalNumRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

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

    reviews?.forEach((review) => {
      perRate[review?.rating] += 1;
      totalNumRate += 1;
      totalRate += review?.rating;
    });

    setPerRating(perRate);
    setAverageRating(totalRate / totalNumRate);
    setTotalNumRating(totalNumRate);
  };

  useEffect(() => {
    if (reviews) handleReviews();
  }, [reviews]);
  return (
    <div className="container-fluid px-1 mx-auto">
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

          {reviews &&
            reviews?.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
