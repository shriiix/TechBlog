import {
  createPost as _createPost,
  listPosts as _listPosts,
  getPostBySlug as _getPostBySlug,
  updatePost as _updatePost,
  deletePost as _deletePost,
  likePost as _likePost,
} from "../services/postService.js";

const createPost = async (req, res, next) => {
  try {
    const post = await _createPost(req.body, req.user.userId);
    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

const listPosts = async (req, res, next) => {
  try {
    const data = await _listPosts(req.query);
    res.json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getPostBySlug = async (req, res, next) => {
  try {
    const post = await _getPostBySlug(req.params.slug);
    res.json({
      success: true,
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const post = await _updatePost(req.params.id, req.body, req.user.userId);
    res.json({
      success: true,
      message: "Post updated successfully",
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    await _deletePost(req.params.id, req.user.userId);
    res.json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

const likePost = async (req, res, next) => {
  try {
    const post = await _likePost(req.params.id, req.user.userId);
    res.json({
      success: true,
      message: "Post liked successfully",
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

export {
  createPost,
  listPosts,
  getPostBySlug,
  updatePost,
  deletePost,
  likePost,
};
