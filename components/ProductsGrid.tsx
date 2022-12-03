import React from "react";
import Image from "next/image";
import uniqid from "uniqid";
import styles from "../styles/ProductPage.module.css";

type productObj = {
  category: string;
  pathName: string;
  animeName: string;
  title: string;
  desc: string;
  url: string;
  price: Number;
};

function ProductsGrid(props) {
  const { productData } = props;

  console.log("props pG: ", props);

  let gridEl = productData.map((product: productObj) => {
    // proudct key is going to be equal to SKU id. I think.
    // console.log(product.url);

    return (
      <div key={uniqid()}>
        <div className={styles.imgContainer}>
          <Image
            fill
            objectFit="contain"
            alt="product image"
            src={product.url}
          />
        </div>
        <p>{product.title}</p>
        <p>{`$ ${product.price}`}</p>
      </div>
    );
  });
  return <div className={styles.productContainer}>{gridEl}</div>;
}

export default ProductsGrid;
