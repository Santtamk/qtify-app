import React from 'react';
import heroImage from '../../assets/headphone.svg';
import styles from './HeroImage.module.css'

function HeroImage() {
  return (
    <div  className={styles.himage}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroImage} width={212} alt="heroimage" />
      </div>
    </div>
  )
}

export default HeroImage