import mongoose from "mongoose";
import * as dotenv from "dotenv";
// import { env } from "process";
dotenv.config();

// create mongodb mongodb connection

// "createConnection doesn't load product for some reason."

const main = async () => {
  mongoose.connect(process.env.MONGO_PRODUCTS as string);
  console.log("ProductDB connected");
};

export default main;
