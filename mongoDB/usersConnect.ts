import mongoose from "mongoose";
import userSchema from "./Models/user";
import * as dotenv from "dotenv";

let userConn = mongoose.createConnection(process.env.MONGO_USERS as string);

userConn.model("user_model", userSchema);
export default userConn;
