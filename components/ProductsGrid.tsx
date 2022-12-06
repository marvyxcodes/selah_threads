import React from "react";
import Image from "next/image";
import uniqid from "uniqid";
import styles from "../styles/ProductPage.module.css";

interface Props {
  productData: {
    category: string;
    type: string;
    pathName: string;
    animeName: string;
    title: string;
    desc: string;
    imgUrl: string;
    price: Number;
    size: object;
  }[];
}

// interface productObj {
//   category: string;
//   type: string;
//   pathName: string;
//   animeName: string;
//   title: string;
//   desc: string;
//   imgUrl: string;
//   price: Number;
//   size: object;
// }

function ProductsGrid(props: Props) {
  const { productData } = props;

  // console.log("props PGrid: ", props);

  let gridEl = productData.map((product) => {
    // proudct key is going to be equal to SKU id in future

    return (
      <div key={uniqid()}>
        <div className={styles.imgContainer}>
          <Image
            fill
            style={{ objectFit: "contain" }}
            alt="product image"
            src={product.imgUrl}
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
