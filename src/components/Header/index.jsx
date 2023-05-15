import logo from '../../assets/logo.png';
import Nav from '../Nav/';
import Styles from './header.module.scss';

function Header() {
  return (
    <div className={Styles.header}>
      <img src={logo} alt='Kasa, trouvez un logement partout' className={Styles.header__logo} />
      <Nav />
    </div>
  );
}

export default Header;