import mongoose from "mongoose";

const clothingSchema = new mongoose.Schema({
  category: String,
});

const animeSchema = new mongoose.Schema({
  anime: String,
  imgSrc: String,
  clothesType: String,
});

const animeCollection =
  mongoose.models["Anime Collection"] ||
  mongoose.model("Anime Collection", animeSchema);

export default animeCollection;
