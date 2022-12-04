import mongoose from "mongoose";
import { env } from "process";

let connectionStr = process.env.MONGO_CONNECT as string;
// create mongodb mongodb connection

const main = async () => {
  mongoose.connect(connectionStr);
  console.log("database connected");
};

export default main;
