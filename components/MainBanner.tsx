import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

function MainBanner(props) {
  const {src} = props;
  return (<div className='relative w-full h-96 flex justify-center items-center'>
    <Image className={styles.bannerLogo} src='/weebLogo.svg' alt='site logo' width={300} height={100}/>
    <Image src={src} alt='sharingan banner' fill objectFit="cover"/>
    </div>)
}

export default MainBanner;
