import mongoose from "mongoose";

const clothingSchema = new mongoose.Schema({
  category: String,
});

const animeSchema = new mongoose.Schema({
  anime: String,
  imgSrc: String,
  clothesType: String,
});


export { animeSchema };
