import {
  createTag as _createTag,
  getAllTags as _getAllTags,
  getTagById as _getTagById,
  updateTag as _updateTag,
  deleteTag as _deleteTag,
} from "../services/tagService.js";

const createTag = async (req, res, next) => {
  try {
    const tag = await _createTag(req.body);
    res.status(201).json({
      success: true,
      message: "Tag created successfully",
      data: tag,
    });
  } catch (err) {
    next(err);
  }
};

const getAllTags = async (req, res, next) => {
  try {
    const tags = await _getAllTags();
    res.json({
      success: true,
      data: tags,
    });
  } catch (err) {
    next(err);
  }
};

const getTagById = async (req, res, next) => {
  try {
    const tag = await _getTagById(req.params.id);
    res.json({
      success: true,
      data: tag,
    });
  } catch (err) {
    next(err);
  }
};

const updateTag = async (req, res, next) => {
  try {
    const tag = await _updateTag(req.params.id, req.body);
    res.json({
      success: true,
      message: "Tag updated successfully",
      data: tag,
    });
  } catch (err) {
    next(err);
  }
};

const deleteTag = async (req, res, next) => {
  try {
    await _deleteTag(req.params.id);
    res.json({
      success: true,
      message: "Tag deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

export { createTag, getAllTags, getTagById, updateTag, deleteTag };
