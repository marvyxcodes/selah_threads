import React, { ReactPropTypes } from "react";
import { JsxAttribute } from "typescript";

// type collectionObj = {
//   _id: string;
//   anime: string;
//   imgSrc: string;
//   clothesType: string;
//   __v: number;
// };
// props: collectionObj[]

function ProductsGrid(props) {
  const { productData } = props;

  console.log("props pG: ", props);

  let gridEl = productData.map((product) => {
    return (
      <div key={product.anime}>
        <h1>{product.anime}</h1>
        <img alt="product image" src={product.url} />
      </div>
    );
  });
  return <>{gridEl}</>;
}

export default ProductsGrid;
