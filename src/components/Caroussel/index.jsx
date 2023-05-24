import styles from './caroussel.module.scss'
import left from '../../assets/left.png'
import right from '../../assets/right.png'

function Caroussel ({cover}) {
return (
    <div className={styles.items1}>
        <img src={cover} alt='interieur appartement' className={styles.items1__image} />
        <img src={left} alt="flèche directionelle" className={styles.items1__arrow1} />
        <img src={right} alt="flèche directionelle" className={styles.items1__arrow2} />
    </div>
) 

}

export default Caroussel