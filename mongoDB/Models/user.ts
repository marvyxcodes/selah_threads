import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User =
  mongoose.models["userModels"] || mongoose.model("userModels", userSchema);

export default User;
