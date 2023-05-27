import styles from "./star.module.scss";
import fullstar from "../../assets/Vector.png";
import emptystar from "../../assets/Vector(1).png";

function Star({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={styles.starcontainer}>
      {stars.map((star, index) =>
        rating >= star ? (
          <img
            src={fullstar}
            alt="étoile pleine"
            className={styles.starcontainer__star}
            key={index}
          />
        ) : (
          <img
            src={emptystar}
            alt="étoile vide"
            className={styles.starcontainer__star}
            key={index}
          />
        )
      )}
    </div>
  );
}

export default Star;
