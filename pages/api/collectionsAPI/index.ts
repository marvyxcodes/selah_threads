// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import main from "../../../mongoDB/connect";
<<<<<<< HEAD
import animeCollection from "../../../mongoDB/schema";
=======
import { onePieceCollection } from "../../../mongoDB/schema";
>>>>>>> 89791dd1a8fead7c7b8d264e313d77b4cd1466b7

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  main().catch((error) => console.error(error));

<<<<<<< HEAD
  // const create = new animeCollection({
=======
  // const create = new onePieceCollection({
>>>>>>> 89791dd1a8fead7c7b8d264e313d77b4cd1466b7
  //   anime: "Naruto",
  //   imgSrc: "test",
  //   clothesType: "shirt",
  // });

  // create.save().then(() => {
  //   res.status(200).json(create);
  // });

<<<<<<< HEAD
  const response = await animeCollection.find({}).exec();
=======
  const response = await onePieceCollection.find({}).exec();
>>>>>>> 89791dd1a8fead7c7b8d264e313d77b4cd1466b7

  return res.status(200).json({ response });
}

// learn how to properly work with API and fetch here
