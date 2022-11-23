// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import main from "../../../mongoDB/connect";
import { animeSchema } from "../../../mongoDB/schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  main().catch((error) => console.error(error));
  let collection =  req.query.collectionId as string
  console.log(collection)

  console.log(collection);
  let colModel = mongoose.models[collection] || mongoose.model(collection, animeSchema)

  // const create = new onePieceCollection({
  //   anime: "one-piece",
  //   imgSrc: "test",
  //   clothesType: "shirt",
  // });

  // create.save().then(() => {
  //   res.status(200).json(create);
  // });

  const response = await colModel.find({}).exec();
  mongoose.connection.close();

  return res.status(200).json(response);
}

// learn how to properly work with API and fetch here
