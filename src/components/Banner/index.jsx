import Styles from './banner.module.scss';

function Banner() {
    return (
    <div className={Styles.banner}>
       <div className={Styles.banner__text}><p >Chez vous, partout et ailleurs</p></div>
    </div>
    );
}

export default Banner