import mongoose, { model, Schema } from "mongoose";

const FoodSchema = new Schema({
  name: String,
  category: String,
  img: String,
  ingredient: [{ type: String }],
  price: Number,
  sale: Number,
});

export const FoodModel = mongoose.models.Food || model("Food", FoodSchema);
