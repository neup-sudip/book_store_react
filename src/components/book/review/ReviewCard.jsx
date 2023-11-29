/* eslint-disable react/prop-types */
const ReviewCard = ({ review }) => {
  return (
    <>
      {review?.comment && (
        <div className="">
          <p>{review?.comment}</p>
        </div>
      )}
    </>
  );
};

export default ReviewCard;
