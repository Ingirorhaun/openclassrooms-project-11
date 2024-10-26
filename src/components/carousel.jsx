import { useRef, useState } from "react";
import "./../styles/components/_carousel.scss";

export default function Carousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesWrapper = useRef(null);
  let imageWidth = 1240;

  // set imagewidth to 335px if screen width is lower than 1439px
  if (window.innerWidth < 1439) {
    imageWidth = 335;
  }

  const prevBtn = (
    <svg
      width="48"
      height="80"
      viewBox="0 0 48 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
        fill="white"
      />
    </svg>
  );
  const nextBtn = (
    <svg width="48" height="80" viewBox="0 0 48 80" fill="none">
      <path
        d="M0.960022 72.8231L8.04002 79.9031L47.64 39.3031L8.04002 0.703125L0.960022 7.78312L33.48 40.3031L0.960022 72.8231Z"
        fill="white"
      />
    </svg>
  );

  if (!images || images.length === 0) {
    return null;
  } else if (images.length === 1) {
    return (
      <div className="carousel">
        <img src={images[0]} alt={title} />
      </div>
    );
  }

  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    imagesWrapper.current.style.transform = `translateX(-${
      newIndex * imageWidth
    }px)`;
  };

  const showPreviousImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    imagesWrapper.current.style.transform = `translateX(-${
      newIndex * imageWidth
    }px)`;
  };

  return (
    <div className="carousel">
      <div className="images-wrapper" ref={imagesWrapper}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={title}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="controls">
        <div className="prev" onClick={showPreviousImage}>
          {prevBtn}
        </div>
        <div className="next" onClick={showNextImage}>
          {nextBtn}
        </div>
      </div>
      <div className="count">{currentIndex + 1 + "/" + images.length}</div>
    </div>
  );
}
