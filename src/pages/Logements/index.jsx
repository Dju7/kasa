import { useLoaderData} from "react-router-dom";
import lodgings from "../../datas/logements.json";
import Caroussel from "../../components/Caroussel";
import styles from "./logement.module.scss";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import Host from "../../components/Host";
import Star from "../../components/Star";

export const loader = async ({ params }) => {
  const { id } = params;
  const lodging = lodgings.find((lodging) => lodging.id === id);
  return lodging;
};

function Logements() {
  const lodging = useLoaderData();

  return (
    <main>
      <section className={styles.caroussel}>
        <Caroussel pictures={lodging.pictures} />
      </section>
      <section className={styles.accomodation}>
        <div className={styles.infos}>
          <h1>{lodging.title}</h1>
          <p>{lodging.location}</p>
          <div className={styles.infos__taglist}>
            {lodging.tags.map((tag, index) => {
              return (
                <Tag key={index} tag={tag}>
                  <p>{lodging.tags}</p>
                </Tag>
              );
            })}
          </div>
        </div>
        <div className={styles.badge}>
          <div className={styles.badge__star}>
            <Star rating={lodging.rating} />
          </div>
          <div className={styles.badge__host}>
            <Host name={lodging.host.name} picture={lodging.host.picture} />
          </div>
        </div>
      </section>
      <div className={styles.features}>
        <div className={styles.features__description}>
          <Collapse title="description">
            <p>{lodging.description}</p>
          </Collapse>
        </div>
        <div className={styles.features__equipments}>
          <Collapse title="équipements">
            <ul>
              {lodging.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  );
}

export default Logements;
