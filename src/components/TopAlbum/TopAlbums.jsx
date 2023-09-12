import React from 'react';
import FirstCard from '../Card/FirstCard';
import styles from './TopAlbums.module.css';
import card from '../../assets/BollywoodHitsCard.png';


function TopAlbums() {
  return (
    <div className={styles.headText}>
        <div className={styles.topAlbumHeader}>
          <div>Top Albums</div>
          <div className={styles.collapse}>Collapse</div>
        </div>
      <div className={styles.firstCardContainer}>
        <div className={styles.firstCard}>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
          <FirstCard img={card} text='Bolyhood' className={styles.allcard}/>
        </div>
      </div>
    </div>
  )
}

export default TopAlbums