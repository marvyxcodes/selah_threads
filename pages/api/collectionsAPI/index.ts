// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import main from "../../../mongoDB/connect";

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


}

// learn how to properly work with API and fetch here
