import { FoodModel } from "@/models/food.schema";

type FoodType = {
  name: { type: String; required: true };
  category: { type: String; required: true };
  img: { type: String; required: true };
  ingredient: { type: String; required: true };
  price: { type: Number; required: true };
  sale: { type: Number };
};

export const createFood = async (
  name: String,
  category: String,
  img: String,
  ingredient: String,
  price: Number,
  sale: Number
): Promise<FoodType> => {
  const createFood = await FoodModel.create({
    name,
    category,
    img,
    ingredient: ingredient.replaceAll(" ", "").split(","),
    price,
    sale,
  });
  return createFood;
};

export const getFoods = async () => {
  const getFoods = await FoodModel.find();
  return getFoods;
};
