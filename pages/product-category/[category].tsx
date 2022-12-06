import React, { useState, useEffect } from "react";
import styles from "styles/ProductPage.module.css";
import Image from "next/image";
import BreadCrumb from "../../components/BreadCrumb";
import FilterNavigationBar from "../../components/FilterNavigationBar";
import { useRouter } from "next/router";
import ProductsGrid from "../../components/ProductsGrid";
import BannerImage from "../../components/BannerImage";
import main from "../../mongoDB/connect";
import Product from "../../mongoDB/Models/product";

// Page renders indiviual collections of popular anime shows.
// Upon clicking NavBar collection dynamically hydrate client dom with selected choice.

type staticProps = {
  data: Array<object>;
};

export default function Category(products: staticProps) {
  const propsData = products.data as any;
  const router = useRouter();
  let urlQuery = router.query.category;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // console.log("router :", router);

  return (
    <section className={styles["product-container"]}>
      <BreadCrumb />
      <div className={styles["product-banner"]}>
        {/* dynamic banner */}
        {/* <BannerImage urlQuery={urlQuery} /> */}
      </div>

      {/* Filter bar for looks right now. Implentation coming */}
      {/* <FilterNavigationBar /> */}
      {/* Product Grid Component displays all producs associated with collection */}
      <ProductsGrid productData={propsData} />
    </section>
  );
}

interface paramsObj {
  params: { category: string };
}

//  STATIC GENERATION SECTION //
export async function getStaticProps(context: paramsObj) {
  const { params } = context;

  // let res = await fetch(
  //   `http://localhost:3000/api/category/${params.category}`
  // );
  // let data = await res.json();

  main().catch((error) => console.error(error));
  const response = await Product.find({ category: params.category }).exec();
  let data = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "upcoming-releases" } },
      { params: { category: "art" } },
      { params: { category: "limited" } },
    ],
    fallback: true,
  };
}
