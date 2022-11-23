// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import main from "../../../mongoDB/connect";
import { onePieceCollection } from "../../../mongoDB/schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  main().catch((error) => console.error(error));

  // const create = new onePieceCollection({
  //   anime: "Naruto",
  //   imgSrc: "test",
  //   clothesType: "shirt",
  // });

  // create.save().then(() => {
  //   res.status(200).json(create);
  // });

  const response = await onePieceCollection.find({}).exec();

  return res.status(200).json({ response });
}

// learn how to properly work with API and fetch here
