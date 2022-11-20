import React, { useState, useEffect } from "react";
import styles from "styles/ProductPage.module.css";
import Image from "next/image";
import BreadCrumb from "../../components/BreadCrumb";
import FilterNavigationBar from "../../components/FilterNavigationBar";

// after everything go over and see what can be component vs on page

export default function productPage(products: object) {
  // this page will act as default template for items, but items will be dynamically pulled by render

  return (
    <section className={styles["product-container"]}>
      <BreadCrumb />
      <div className={styles["product-banner"]}>
        <Image
          src="/onePieceBanner.png"
          alt="One Piece Banner"
          width="1000"
          height="300"
        />
      </div>

      <FilterNavigationBar />
    </section>
  );
}

export async function getStaticProps() {
  let res = await fetch("http://localhost:4000/products");
  let data = await res.json();

  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { collection: "one-piece" } }],
    fallback: false,
  };
}
