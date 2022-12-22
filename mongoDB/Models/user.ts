import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User =
  mongoose.models["user_model"] || mongoose.model("user_model", userSchema);

export default userSchema;
