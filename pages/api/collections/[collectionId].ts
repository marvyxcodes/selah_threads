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

  console.log("collection query: ", collection);

  const response = await Product.find({ collection }).exec();

  // console.log("COLLECTION: ", collection);

  // do not close connection to DB. Causes crash out.

  // mongoose.connection.close();

  return res.status(200).json(response);
}

// KEEP FOR FUTURE REF
// const create = new onePieceCollection({
//   anime: "one-piece",
//   imgSrc: "test",
//   clothesType: "shirt",
// });

// create.save().then(() => {
//   res.status(200).json(create);
// });
