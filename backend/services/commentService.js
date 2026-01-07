import { create, find, findById } from "../models/Comment";
import { findById as _findById } from "../models/Post";

const createComment = async (postId, data, userId) => {
  // Verify post exists
  const post = await _findById(postId);
  if (!post) {
    throw new Error("Post not found");
  }

  // Create comment
  const comment = await create({
    ...data,
    post: postId,
    author: userId,
  });

  await comment.populate("author", "username email");
  return comment;
};

const getCommentsByPost = async (postId) => {
  // Verify post exists
  const post = await _findById(postId);
  if (!post) {
    throw new Error("Post not found");
  }

  const comments = await find({ post: postId })
    .sort({ createdAt: -1 })
    .populate("author", "username email")
    .populate("parent");

  return comments;
};

const updateComment = async (id, data, userId) => {
  const comment = await findById(id);

  if (!comment) {
    throw new Error("Comment not found");
  }

  // Check ownership
  if (comment.author.toString() !== userId) {
    throw new Error("Unauthorized to update this comment");
  }

  // Update comment
  comment.content = data.content || comment.content;
  await comment.save();

  await comment.populate("author", "username email");
  return comment;
};

const deleteComment = async (id, userId) => {
  const comment = await findById(id);

  if (!comment) {
    throw new Error("Comment not found");
  }

  // Check ownership
  if (comment.author.toString() !== userId) {
    throw new Error("Unauthorized to delete this comment");
  }

  await comment.deleteOne();
  return { message: "Comment deleted successfully" };
};

export default {
  createComment,
  getCommentsByPost,
  updateComment,
  deleteComment,
};
