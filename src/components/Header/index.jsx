import logo from '../../assets/logo.png';
import Nav from '../Nav/';
import './index.scss';

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='Kasa, trouvez un logement partout' className='header__logo' />
      <Nav className='nav' />
    </div>
  );
}

export default Header;