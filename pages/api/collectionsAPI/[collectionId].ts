// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
<<<<<<< HEAD

import main from "../../../mongoDB/connect";
import animeCollection from "../../../mongoDB/schema";
=======
import mongoose from "mongoose";
import main from "../../../mongoDB/connect";
import { animeSchema } from "../../../mongoDB/schema";
>>>>>>> 89791dd1a8fead7c7b8d264e313d77b4cd1466b7

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  main().catch((error) => console.error(error));

<<<<<<< HEAD
  // const create = new animeCollection({
  //   anime: "Naruto",
=======
  let colModel2 = mongoose.models["one-piece"];
  let colModel = mongoose.model("one-piece", animeSchema);

  // const create = new onePieceCollection({
  //   anime: "one-piece",
>>>>>>> 89791dd1a8fead7c7b8d264e313d77b4cd1466b7
  //   imgSrc: "test",
  //   clothesType: "shirt",
  // });

  // create.save().then(() => {
  //   res.status(200).json(create);
  // });

<<<<<<< HEAD
  const response = await animeCollection.find({}).exec();
=======
  const response = await colModel2.find({}).exec();
>>>>>>> 89791dd1a8fead7c7b8d264e313d77b4cd1466b7

  return res.status(200).json({ response });
}

// learn how to properly work with API and fetch here
