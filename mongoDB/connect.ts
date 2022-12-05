import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();

let connectionStr = process.env.MONGO_CONNECT as string;
// create mongodb mongodb connection

// console.log(typeof connectionStr)

const main = async () => {
  mongoose.connect(connectionStr);
  console.log("database connected");
};

export default main;
