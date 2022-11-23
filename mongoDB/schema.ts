import mongoose from "mongoose";

const clothingSchema = new mongoose.Schema({
  category: String,
});

const animeSchema = new mongoose.Schema({
  anime: String,
  imgSrc: String,
  clothesType: String,
});

<<<<<<< HEAD
const animeCollection =
  mongoose.models["Anime Collection"] ||
  mongoose.model("Anime Collection", animeSchema);

export default animeCollection;
=======
// const onePieceCollection =
//   mongoose.models["one-piece"] || mongoose.model("one-piece", animeSchema);

// const narutoCollection =
//   mongoose.models["naruto"] || mongoose.model("naruto", animeSchema);

export { animeSchema };
>>>>>>> 89791dd1a8fead7c7b8d264e313d77b4cd1466b7
