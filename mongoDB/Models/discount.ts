import mongoose, { Schema } from "mongoose";

const discountSchema = new mongoose.Schema({
  name: String,
  desc: String,
});
