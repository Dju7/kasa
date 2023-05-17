import styles from './footer.module.scss'
import Logo from '../../assets/logofoot.png'

function Footer() {
    return (
        <div className={styles.footcontainer}>
            <img src={Logo}  alt='logo Kasa' className={styles.footcainer__logo} />
            <p className={styles.footcontainer__copyright}>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer