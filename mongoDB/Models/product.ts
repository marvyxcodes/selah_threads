import mongoose, { model, Schema } from "mongoose";

const productSchema = new Schema({
  category: { type: String, required: true },
  anime: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: String },
  url: { type: String },
  price: { type: Number, required: true },
  inventory: { type: Number, required: true },
});

const Product =
  mongoose.models["productModel"] || model("productModel", productSchema);

export default Product;
