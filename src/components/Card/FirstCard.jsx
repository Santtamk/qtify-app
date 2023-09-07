import React from 'react';
import card from '../../assets/BollywoodHitsCard.png';
import styles from './FirstCard.module.css';


function FirstCard() {
  return (
    <div className={styles.card}>
        <img src={card} alt="card" />
        <p>New Bollywood</p>
    </div>
  )
}

export default FirstCard