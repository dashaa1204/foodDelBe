import { CategoryModel } from "@/models/category.schema";

export const createCategory = async (name: String) => {
  const createCategory = await CategoryModel.create({ name });
  return createCategory;
};

export const getCategories = async () => {
  const getCategories = await CategoryModel.find();
  return getCategories;
};

export const updateCategory = async (name: string, updatedName: string) => {
  const updateCategory = await CategoryModel.updateOne(
    { name },
    { name: updatedName }
  );
  return updateCategory;
};

export const deleteCategory = async (_id: string) => {
  const deleteCategory = await CategoryModel.deleteOne({ _id });
  return deleteCategory;
};
