import { NavLink } from 'react-router-dom';
import Styles from './nav.module.scss';

function Nav() {
  return (
    <nav className={Styles.nav}>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : "" }>Accueil</NavLink>
      <NavLink to="/apropos" className={({ isActive }) => isActive ? "active" : "" }>A propos</NavLink> 
    </nav>
  );
}

export default Nav;