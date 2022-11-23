import mongoose from "mongoose";

const clothingSchema = new mongoose.Schema({
  category: String,
});

const animeSchema = new mongoose.Schema({
  anime: String,
  imgSrc: String,
  clothesType: String,
});

// const onePieceCollection =
//   mongoose.models["one-piece"] || mongoose.model("one-piece", animeSchema);

// const narutoCollection =
//   mongoose.models["naruto"] || mongoose.model("naruto", animeSchema);

export { animeSchema };
