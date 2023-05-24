import Banner from '../../components/Banner/';
// import {getAllLodgings} from '../../api/';
import styles from './home.module.scss'
import Card from '../../components/Card'
import {Link, useLoaderData} from 'react-router-dom'
import Lodgings from '../../datas/logements.json';

export const loader =  async () => {
  return Lodgings;
};


function Home() {
const lodgings = useLoaderData();
  return (
    <main >
      <Banner />
      <section className={styles.gallery}>
        {lodgings.map((lodging) => (
          <div className='display' key={lodging.id}>
            < Link to={`/logements/${lodging.id}`}>
              <Card cover={lodging.cover} title={lodging.title} />
             </Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
