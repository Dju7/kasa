import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
 
function Header() {
    return (
    <div className='header'>
        <img src= {logo} alt='Kasa, trouvez un logement partout' className='header__logo' />
        <nav className='header__nav'>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A propos</Link>
        </nav>
    </div>
    )
}

export default Header