import React from 'react';
// import card from '../../assets/BollywoodHitsCard.png';
import styles from './FirstCard.module.css';



function FirstCard({img, text}) {


  return (
    <div className={styles.card}>
        <img src={img} alt="cardImg" />
        <p>{text}</p>
    </div>
  )
}

export default FirstCard