import { Link } from "react-router-dom";
import styles from "./error.module.scss";

function Error() {
  return (
    <div className={styles.error}>
      <p className={styles.error__number}>404</p>
      <p className={styles.error__text}>
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.error__link}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
