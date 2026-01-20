import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
});

const Comment = model("Comment", commentSchema);

export const create = (data) => Comment.create(data);
export const find = (query) => Comment.find(query);
export const findById = (id) => Comment.findById(id);

export default Comment;
