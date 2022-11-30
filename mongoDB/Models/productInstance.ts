import mongoose, { Schema } from "mongoose";

const productInstance = new mongoose.Schema({
  anime: String,
  imgSrc: String,
  clothesType: String,
});
