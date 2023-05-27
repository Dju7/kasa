import styles from "./caroussel.module.scss";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import { useState } from "react";

function Caroussel({ pictures }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const previouSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const showArrows = pictures.length > 1;
  
  return (
    <div className={styles.caroussel}>
        {showArrows && (
      <img
        src={left}
        alt="flèche directionelle"
        className={styles.caroussel__arrow1}
        onClick={previouSlide}
      />
      )}
      <img
        src={pictures[activeSlide]}
        className={styles.caroussel__image}
        alt="décoration intérieure"
      />
      {showArrows && ( 
      <img
        src={right}
        alt="flèche directionelle"
        className={styles.caroussel__arrow2}
        onClick={nextSlide}
      />
      )}
    </div>
  );
}

export default Caroussel;
