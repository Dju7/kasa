import Head from '../../components/HeadApropos/'
import Collapse from '../../components/Collapse'
import styles from './apropos.module.scss'
import aproposTxt from '../../datas/apropos.json'

function Apropos() {
  return (
    <main className={styles.apropos}>
      <Head />
      <section className={styles.collapse_box}>
        {aproposTxt.map(data => {
          return (
            <Collapse key={data.id} />
          )}
          )}
          <Collapse/>
      </section>     
    </main>
  );
}
  
  export default Apropos;