import Banner from "../../components/Banner/";
import styles from "./home.module.scss";
import Card from "../../components/Card";
import { Link, useLoaderData } from "react-router-dom";


function Home() {
  const lodgings = useLoaderData();
  return (
    <main>
      <Banner />
      <section className={styles.gallery}>
        {lodgings.map((lodging) => (
          <div className="display" key={lodging.id}>
            <Link to={`/logements/${lodging.id}`}>
              <Card cover={lodging.cover} title={lodging.title} />
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
