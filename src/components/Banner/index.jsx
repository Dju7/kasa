import styles from './banner.module.scss';

function Banner() {
    return (
    <section className={styles.banner}>
       <div className={styles.banner__text}><p>Chez vous, partout et ailleurs</p></div>
    </section>
    );
}

export default Banner