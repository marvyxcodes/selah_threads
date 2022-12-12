import React from 'react'
import main from "../../../../mongoDB/connect";
import Product from "../../../../mongoDB/Models/product";

// THIS WORKS
function index({data}) {
  console.log(data);
  return (
    <div></div>
  )
}

export default index


export async function getStaticProps(context) {
  const { params } = context;
  // let res = await fetch(
  //   `http://localhost:3000/api/category/${params.category}`
  // );
  // let data = await res.json();

  let urlQuery = { category: params.category } as any;

  // Run query that searches for everything but misc.
  if (params.category === "clothing") urlQuery = { type: { $ne: "art" } };

  main().catch((error) => console.error(error));
  const response = await Product.find(urlQuery).exec();
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
      { params: { product:  } },

    ],
    fallback: true,
  };
}
