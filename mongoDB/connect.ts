import mongoose from "mongoose";
import * as dotenv from "dotenv";
// import { env } from "process";
dotenv.config();

// create mongodb mongodb connection

const main = async (database: string) => {
  let connection: string = "";
  if (database === "products")
    connection = process.env.MONGO_PRODUCTS as string;
  if (database === "users") connection = process.env.MONGO_USERS as string;

  mongoose.connect(connection);
  console.log("database connected");
};

export default main;
