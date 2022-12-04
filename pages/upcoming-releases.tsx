import React from "react";
import styles from "../styles/ProductPage.module.css";
import BreadCrumb from "../components/BreadCrumb";
import BannerImage from "../components/BannerImage";
import FilterNavigationBar from "../components/FilterNavigationBar";
import ProductsGrid from "../components/ProductsGrid";

const upcomingReleases = (props) => {
  const propsData = props.data;

  console.log("propsdata: ", propsData);
  return (
    <section className={styles["product-container"]}>
      <BreadCrumb />
      <div className={styles["product-banner"]}>
        {/* dynamic banner */}
        <BannerImage urlQuery={"urlQuery"} />
      </div>
      {/* Filter bar for looks right now. Implentation coming */}
      <FilterNavigationBar />
      {/* Product Grid Component displays all producs associated with collection */}
      <ProductsGrid productData={propsData} />
    </section>
  );
};

export default upcomingReleases;

export async function getStaticProps() {
  let res = await fetch("http://localhost:3000/api/upcoming-releases");
  let data = await res.json();

  return {
    props: {
      data,
    },
  };
}
