import React from 'react';
import Image from 'next/image';
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className='forCustomers'>

        </div>
        <div className='aboutUs'>

        </div>
        <div className='information'></div>
        Copyright @ WeebMania Inc.
        <span className={styles.logo}>
        </span>
      </footer>
  )
}

export default Footer