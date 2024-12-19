import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url && url !== '') fetchImage(url);
  }, [url]);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return <div>Loading, please wait!</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occurred. {errorMsg}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={() => handlePrevious()} className="arrow arrow-left"/>
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              src={imageItem.download_url}
              key={imageItem.id}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill onClick={() => handleNext()} className="arrow arrow-right"/>
      <div className="current-indicator-container">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={`current-indicator ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))
          : null}
      </div>
    </div>
  );
}
