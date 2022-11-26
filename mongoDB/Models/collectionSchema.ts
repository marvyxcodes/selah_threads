import mongoose, { Schema } from "mongoose";

const animeSchema = new mongoose.Schema({
  anime: String,
  imgSrc: String,
  clothesType: String,
});
