import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

type bannerProp = {
  src: string;
};

function MainBanner(props: bannerProp) {
  const { src } = props;
  return (
    <div className="relative w-full h-96 flex justify-center items-center">
      <Image
        className={styles.bannerLogo}
        src="/weebLogo.svg"
        alt="site logo"
        width={300}
        height={100}
      />
      <Image src={src} alt="sharingan banner" fill objectFit="cover" />
    </div>
  );
}

export default MainBanner;
