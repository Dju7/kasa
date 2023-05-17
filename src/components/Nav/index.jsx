import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss';

function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({isActive}) => isActive ? styles.active : "" }>Accueil</NavLink>
      <NavLink to="/apropos" className={({ isActive }) => isActive ? styles.active : "" }>A propos</NavLink> 
    </nav>
  );
}

export default Nav;