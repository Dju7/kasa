import Banner from '../../components/Banner/';
import {getAllLodgings} from '../../api/';
import styles from './home.module.scss'
import Card from '../../components/Card'

function Home() {
  const lodgings = getAllLodgings();
  return (
    <main >
      <Banner />
      <section className={styles.gallery}>
        {lodgings.map((lodging) => (
          <div className='display' key={lodging.id}>
          <Card cover={lodging.cover} title={lodging.title} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
