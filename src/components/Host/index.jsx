import styles from './host.module.scss'

function Host ({name, picture}) {
    return (
        <div className={styles.hostcontainer}>
            <div className={styles.hostcontainer__name}>
            <p>{name}</p>
            </div>
            <div className={styles.hostcontainer__image}>
               <img src={picture} alt='hôte' />
            </div>
        </div>
    )
}

export default Host