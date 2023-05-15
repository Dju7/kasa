import './index.scss'
import Logo from '../../assets/logofoot.png'

function Footer() {
    return (
        <div className='footcontainer'>
            <img src={Logo}  alt='logo Kasa' className='footcontainer__logo' />
            <p className='footcontainer__copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer