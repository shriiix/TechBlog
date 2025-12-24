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

export default model("Comment", commentSchema);
