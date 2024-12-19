import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleOnClick = (getCurrentId) => {
    setRating(getCurrentId);
  };
  const handleOnMouseEnter = (getCurrentId) => {
    setHover(getCurrentId);
  };
  const handleOnMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div
      className="star-rating"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            size={40}
            onClick={() => handleOnClick(index)}
            onMouseEnter={() => handleOnMouseEnter(index)}
            onMouseLeave={() => handleOnMouseLeave()}
          />
        );
      })}
    </div>
  );
}
