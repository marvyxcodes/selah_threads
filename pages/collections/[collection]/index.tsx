import React, { useState, useEffect } from "react";
import styles from "styles/ProductPage.module.css";
import Image from "next/image";
import BreadCrumb from "../../../components/BreadCrumb";
import FilterNavigationBar from "../../../components/FilterNavigationBar";
import { useRouter } from "next/router";
import ProductsGrid from "../../../components/ProductsGrid";
import BannerImage from "../../../components/BannerImage";
import Product from "../../../mongoDB/Models/product";
import main from "../../../mongoDB/connect";

// Page renders indiviual collections of popular animecollection shows.
// Upon clicking NavBar collection dynamically hydrate client dom with selected choice.

// type staticProps = {
//   data: Array<object>;
// };

interface Props {
  data: {}[];
}

export default function CollectionPage(products: Props) {
  const propsData = products.data as any;
  //propsData is array of objects

  const router = useRouter();
  let urlQuery = router.query.collection as string;

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
interface paramsObj {
  params: { collection: string };
}
export async function getStaticProps(context: paramsObj) {
  const { params } = context;
  // let res = await fetch(
  //   `http://localhost:3000/api/collections/${params.collection}`
  // );
  // let data = await res.json();

  main().catch((error) => console.error(error));
  const response = await Product.find({ pathName: params.collection }).exec();
  let data = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
