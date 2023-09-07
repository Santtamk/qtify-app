import React from 'react';
import heroImage from '../../assets/heroImage.svg';
import styles from './HeroImage.module.css'

function HeroImage() {
  return (
    <div  className={styles.himage}>
        <img src={heroImage} alt="heroimage" />
    </div>
  )
}

export default HeroImage