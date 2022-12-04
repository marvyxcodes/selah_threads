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
  const { categoryId } = req.query;
  console.log(categoryId);

  // console.log("request obj: ", req);
  main().catch((error) => console.error(error));

  const response = await Product.find({}).exec();

  return res.status(200).json(response);
}
