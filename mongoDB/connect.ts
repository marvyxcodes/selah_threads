import mongoose from "mongoose";
import * as dotenv from "dotenv";
// import { env } from "process";
dotenv.config();

// create mongodb mongodb connection

const main = async (database: string) => {

  
  let productsDB = process.env.MONGO_PRODUCTS;
  let usersDB = process.env.MONGO_USERS;

  mongoose.createConnection();
  console.log("database connected");
};

export default main;
