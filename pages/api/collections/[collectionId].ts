// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import main from "../../../mongoDB/connect";
import Product from "../../../mongoDB/Models/product";

// API route supplies props for collections pages dynamically
// Pulls in database collection based on URL param query.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  main().catch((error) => console.error(error));

  let collection = req.query.collectionId as string;
  // console.log("collection query: ", collection);

  const response = await Product.find({ pathName: collection }).exec();

  return res.status(200).json(response);
}
