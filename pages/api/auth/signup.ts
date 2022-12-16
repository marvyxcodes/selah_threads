import { NextApiRequest, NextApiResponse } from "next";
import { uid } from "uid";
import main from "../../../mongoDB/connect";
import User from "../../../mongoDB/Models/user";

const bcrypt = require("bcrypt");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let userCreds = JSON.parse(req.body);

  console.log("user: ", userCreds);
  console.log("password: ", userCreds.password);


  if (userCreds.password !== userCreds.rpassword) {
     return res.status(400).json("No Match");
  }

  const salt = await bcrypt.genSalt(10);
  let newHash = await bcrypt.hash(userCreds.password, salt);

  main("users").catch((err) => console.error(err));
  User.create({
    uid: uid(),
    username: userCreds.username,
    password: newHash,
  });

  res.status(201).json("Success");
}
