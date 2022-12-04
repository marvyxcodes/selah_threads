import mongoose, { model, Schema } from "mongoose";

const productSchema = new Schema({
  category: { type: String, required: true },
  pathName: { type: String, required: true },
  animeName: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String },
  url: { type: String },
  price: { type: Number, required: true },
  size: { type: Object },
});

const Product =
  mongoose.models["productModel"] || model("productModel", productSchema);

export default Product;
