import {Link} from 'react-router-dom';
import './index.scss'

function Error() {
    return (
        <div className="error-container">
          <p className='error-container__number'>404</p>
          <p className="error-container__text">Oups ! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="error-container__link">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error