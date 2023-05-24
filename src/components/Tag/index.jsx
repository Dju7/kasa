import styles from './tag.module.scss'

function Tag ({tag}) {
    return (
    <div className={styles.container}>
        <p>{tag}</p>
    </div>
    )
}

export default Tag