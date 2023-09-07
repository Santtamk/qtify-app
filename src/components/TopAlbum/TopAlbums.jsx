import React from 'react';
import FirstCard from '../Card/FirstCard';
import styles from './TopAlbums.module.css';


function TopAlbums() {
  return (
    <div className={styles.headText}>
        <div>Top Albums</div>
        <FirstCard />
    </div>
  )
}

export default TopAlbums