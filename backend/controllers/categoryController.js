import {
  createCategory as _createCategory,
  getAllCategories as _getAllCategories,
  getCategoryById as _getCategoryById,
  updateCategory as _updateCategory,
  deleteCategory as _deleteCategory,
} from "../services/categoryService.js";

const createCategory = async (req, res, next) => {
  try {
    const category = await _createCategory(req.body);
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (err) {
    next(err);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await _getAllCategories();
    res.json({
      success: true,
      data: categories,
    });
  } catch (err) {
    next(err);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const category = await _getCategoryById(req.params.id);
    res.json({
      success: true,
      data: category,
    });
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const category = await _updateCategory(req.params.id, req.body);
    res.json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    await _deleteCategory(req.params.id);
    res.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
