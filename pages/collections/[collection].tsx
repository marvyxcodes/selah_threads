import React, { useState, useEffect } from "react";
import styles from "styles/ProductPage.module.css";
import Image from "next/image";
import BreadCrumb from "../../components/BreadCrumb";
import { data } from "../dummyData/data";

export default function productPage(products: object) {
  // this page will act as default template for items, but items will be dynamically pulled by render

  console.log(products);

  function handleFetch() {
    fetch("/api/productData");
  }

  return (
    <section className={styles["product-container"]}>
      <BreadCrumb />
      <button onClick={handleFetch}>fetch data</button>
      <div className={styles["product-banner"]}>
        <Image
          src="/onePieceBanner.png"
          alt="One Piece Banner"
          width="1000"
          height="300"
        />
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { collection: "one-piece" } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  // call api to get props //
  return {
    props: {
      data,
    },
  };
}
