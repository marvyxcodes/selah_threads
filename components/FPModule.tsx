import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React, { ReactPropTypes } from "react";

type moduleProps = {
  heading: string;
  src: string;
  url: string;
};

export const FPModule = (props: moduleProps) => {
  const { heading, src, url } = props;
  return (
    <Link href={url}>
      <div className={styles.homeModule}>
        <Image src={src} alt="new releases thumbnail" fill objectFit="cover" />
        <div className={styles.moduleHeading}>
          <h1>{heading}</h1>
        </div>
      </div>
    </Link>
  );
};
