import mongoose from "mongoose";

const clothingSchema = new mongoose.Schema({
  category: String,
});

const animeSchema = new mongoose.Schema({
  anime: String,
  imgSrc: String,
  clothesType: String,
});

const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  category_id: 
})


export { animeSchema };
