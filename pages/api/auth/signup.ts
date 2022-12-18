import { NextApiRequest, NextApiResponse } from "next";
import { uid } from "uid";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import userSchema from "../../../mongoDB/Models/user";
import userConn from "../../../mongoDB/usersConnect";
import { ServerResponse } from "http";

dotenv.config();

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

  let User = userConn.model("user_model", userSchema);

  let serverResponse;

  User.create(
    {
      uid: uid(),
      username: userCreds.username,
      password: newHash,
    },
    function (err, user) {
      if (err) console.error(err);
      if (user) serverResponse = res.status(200).json("Success");
    }
  );

  // figure out this promise and response stuff

  // handle the return of successful and failure creation of user somehow
  return serverResponse;
  // if (user) return res.status(201).json("Success");
}
