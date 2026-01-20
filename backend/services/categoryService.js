import { findOne, create, find, findById } from "../models/Category.js";

const createCategory = async (data) => {
  // Check if category already exists
  const existing = await findOne({ name: data.name });
  if (existing) {
    throw new Error("Category with this name already exists");
  }

  const category = await create(data);
  return category;
};

const getAllCategories = async () => {
  const categories = await find().sort({ name: 1 });
  return categories;
};

const getCategoryById = async (id) => {
  const category = await findById(id);

  if (!category) {
    throw new Error("Category not found");
  }

  return category;
};

const updateCategory = async (id, data) => {
  const category = await findById(id);

  if (!category) {
    throw new Error("Category not found");
  }

  // Check for duplicate name
  if (data.name && data.name !== category.name) {
    const existing = await findOne({ name: data.name });
    if (existing) {
      throw new Error("Category with this name already exists");
    }
  }

  Object.assign(category, data);
  await category.save();

  return category;
};

const deleteCategory = async (id) => {
  const category = await findById(id);

  if (!category) {
    throw new Error("Category not found");
  }

  await category.deleteOne();
  return { message: "Category deleted successfully" };
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
