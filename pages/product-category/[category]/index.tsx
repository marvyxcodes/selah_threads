import React, { useState, useEffect } from "react";
import styles from "styles/ProductPage.module.css";
import Image from "next/image";
import BreadCrumb from "../../../components/BreadCrumb";
import FilterNavigationBar from "../../../components/FilterNavigationBar";
import { useRouter } from "next/router";
import ProductsGrid from "../../../components/ProductsGrid";
import main from "../../../mongoDB/connect";
import Product from "../../../mongoDB/Models/product";

// Page renders indiviual collections of popular anime shows.
// Upon clicking NavBar collection dynamically hydrate client dom with selected choice.

type staticProps = {
  data: Array<object>;
};

export default function Category(products: staticProps) {
  const propsData = products.data as any;
  const router = useRouter();
  let urlQuery = router.query.category;

  // console.log(products);

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

  let urlQuery = { category: params.category } as any;
  // this gets the selected parameter and assigns it. example:
  // params: {category: 'art'} => product-category/art

  // console.log(params);

  // Run query that searches for specific mongoDB category as pulled from above.
  if (params.category === "clothing") urlQuery = { type: { $ne: "art" } };

  main().catch((error) => console.error(error));
  const response = await Product.find(urlQuery).exec();
  let data = await JSON.parse(JSON.stringify(response));
  //data returns full array of objects associated with category and is returned to page via props.
  return {
    props: {
      data,
    },
  };
}

// since page is dynamic getStaticPaths must be defined for at least one path.
export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "upcoming-releases" } },
    ],
    fallback: true,
  };
}
