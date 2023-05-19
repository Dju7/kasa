import styles from './collapse.module.scss'
import arrow from '../../assets/arrow.png'
import { useState } from 'react';

function Collapse () {
    const [isOpen, setIsOpen] = useState(false);
    
return (
  <div className='collapse-el'>
    <div className={styles.collapse} onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.collapse__title}>Test</p>
        <img src={arrow} className={isOpen ? styles.collapse__arrow : styles.collapse__arrowup} alt='fléche directionnelle' />
    </div>
    <div className={`${styles.collapse__content} ${isOpen ? styles.collapse__content__expanded : ''}`}>
    <p>ceci est un test</p> 
    </div>
  </div>
)
}

export default Collapse