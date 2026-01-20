import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: String,
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    publishedAt: Date,
    readTimeMinutes: Number,
    views: { type: Number, default: 0 },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

export const findOne = (query) => Post.findOne(query);
export const create = (data) => Post.create(data);
export const find = (query) => Post.find(query);
export const findById = (id) => Post.findById(id);
export const countDocuments = (query) => Post.countDocuments(query);

export default Post;
