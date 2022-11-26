import React, { useState, useEffect } from "react";
import styles from "styles/ProductPage.module.css";
import Image from "next/image";
import BreadCrumb from "../../components/BreadCrumb";
import FilterNavigationBar from "../../components/FilterNavigationBar";
import { useRouter } from "next/router";
import ProductsGrid from "../../components/ProductsGrid";

// after everything go over and see what can be component vs on page

type staticProps = {
  data: Array<object>;
};

export default function CollectionPage(products: staticProps) {
  // this page will act as default template for items, but items will be dynamically pulled by render

  const propsData = products.data;

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles["product-container"]}>
      <BreadCrumb />
      <div className={styles["product-banner"]}>
        <Image
          src={"/onePieceBanner.png"}
          alt="One Piece Banner"
          width="1000"
          height="300"
        />
      </div>

      <FilterNavigationBar />

      <ProductsGrid productData={propsData} />
    </section>
  );
}

interface paramsObj {
  params: { collection: string };
}

export async function getStaticProps(context: paramsObj) {
  const { params } = context;
  let res = await fetch(
    `http://localhost:3000/api/collections/${params.collection}`
  );

  // console.log("response: ", res);

  let data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { collection: "one-piece" } }],
    fallback: true,
  };
}
