import styles from './card.module.scss';

function Card ({cover, title}) {
    return (
        
        <article className={styles.card}>
            <img src= {cover} alt="interieur piole" className={styles.card__img} />
            <div className={styles.card__title}>
                <p className={styles.card__title__text}>{title}</p>
            </div>
        </article>
       
    )
}

export default Card