import { NextApiRequest, NextApiResponse } from "next";
import { uid } from "uid";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import userSchema from "../../../mongoDB/Models/user";
import userConn from "../../../mongoDB/usersConnect";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";

dotenv.config();

const bcrypt = require("bcrypt");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  if (!req.body) return res.status(404).redirect("/");

  let userCreds = JSON.parse(req.body);

  // console.log("user: ", userCreds);
  // console.log("password: ", userCreds.password);

  if (userCreds.password !== userCreds.rpassword) {
    return res.status(400).json("No Match");
  }

  const salt = await bcrypt.genSalt(10);
  let newHash = await bcrypt.hash(userCreds.password, salt);

  let User = userConn.model("user_model", userSchema);

  const newUser = {
    uid: uid(),
    username: userCreds.username,
    password: newHash,
  };

  const doesUserExist = await User.findOne({
    username: userCreds.username,
  }).exec();

  if (doesUserExist) {
    return res.status(409).json("userExists");
  }

  User.create(newUser, function (err, user) {
    if (err) {
      console.error("error:", err);
      return res.status(500).json("Error");
    }
    if (user) {
      return res.status(201).json("Success");
    }
  });

  // when new user is unique user is created but nothing returned clientside, on console it returns the user object
  // when error happens it gets logged to console, but not saved to 'result' variable

  // handle the return of successful and failure creation of user somehow
}
