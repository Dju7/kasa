import { Link } from 'react-router-dom';
import './index.scss';

function Nav() {
  return (
    <nav className='nav'>
      <Link to="/" className='nav__firstlink'>Accueil</Link>
      <Link to="/apropos" className='nav__secondlink'>A propos</Link>
    </nav>
  );
}

export default Nav;