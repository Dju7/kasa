import logo from '../../assets/logo.png';
import Nav from '../Nav/';
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt='Kasa, trouvez un logement partout' className={styles.header__logo} />
      <Nav />
    </div>
  );
}

export default Header;