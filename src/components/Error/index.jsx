import {Link} from 'react-router-dom';
import Styles from './error.module.scss';

function Error() {
    return (
        <div className={Styles.error}>
          <p className={Styles.error__number}>404</p>
          <p className={Styles.error__text}>Oups ! La page que vous demandez n'existe pas.</p>
          <Link to="/" className={Styles.error__link}>Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error