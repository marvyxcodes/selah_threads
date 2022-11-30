import React, { useState, useEffect } from "react";
import styles from "styles/ProductPage.module.css";
import Image from "next/image";
import BreadCrumb from "../../components/BreadCrumb";
import FilterNavigationBar from "../../components/FilterNavigationBar";
import { useRouter } from "next/router";
import ProductsGrid from "../../components/ProductsGrid";
import BannerImage from "../../components/BannerImage";

// Page renders indiviual collections of popular anime shows.
// Upon clicking NavBar collection dynamically hydrate client dom with selected choice.

type staticProps = {
  data: Array<object>;
};

interface paramsObj {
  params: { collection: string };
}

export default function CollectionPage(products: staticProps) {
  const propsData = products.data;
  const router = useRouter();
  let urlQuery = router.query.collection;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles["product-container"]}>
      <BreadCrumb />
      <div className={styles["product-banner"]}>
        {/* dynamic banner */}
        <BannerImage urlQuery={urlQuery} />
      </div>

      {/* Filter bar for looks right now. Implentation coming */}
      <FilterNavigationBar />
      {/* Product Grid Component displays all producs associated with collection */}
      <ProductsGrid productData={propsData} />
    </section>
  );
}

//  STATIC GENERATION SECTION //
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
