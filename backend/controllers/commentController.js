import {
  createComment as _createComment,
  getCommentsByPost as _getCommentsByPost,
  updateComment as _updateComment,
  deleteComment as _deleteComment,
} from "../services/commentService";

const createComment = async (req, res, next) => {
  try {
    const comment = await _createComment(
      req.params.postId,
      req.body,
      req.user.userId
    );
    res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: comment,
    });
  } catch (err) {
    next(err);
  }
};

const getCommentsByPost = async (req, res, next) => {
  try {
    const comments = await _getCommentsByPost(req.params.postId);
    res.json({
      success: true,
      data: comments,
    });
  } catch (err) {
    next(err);
  }
};

const updateComment = async (req, res, next) => {
  try {
    const comment = await _updateComment(
      req.params.id,
      req.body,
      req.user.userId
    );
    res.json({
      success: true,
      message: "Comment updated successfully",
      data: comment,
    });
  } catch (err) {
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    await _deleteComment(req.params.id, req.user.userId);
    res.json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

export default {
  createComment,
  getCommentsByPost,
  updateComment,
  deleteComment,
};
