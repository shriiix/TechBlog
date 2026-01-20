import {
  findOne,
  create,
  find,
  countDocuments,
  findById,
} from "../models/Post.js";
import { slugify } from "../utils/slugify.js";
import { getPagination } from "../utils/pagination.js";

const createPost = async (data, authorId) => {
  // Generate slug from title
  const slug = slugify(data.title);

  // Check if slug already exists
  const existing = await findOne({ slug });
  if (existing) {
    throw new Error("A post with this title already exists");
  }

  // Create post
  const post = await create({
    ...data,
    slug,
    author: authorId,
  });

  await post.populate("author", "username email");
  return post;
};

const listPosts = async (query) => {
  const { page, limit, skip } = getPagination(query.page, query.limit);

  // Build filter
  const filter = {};

  if (query.search) {
    filter.title = { $regex: query.search, $options: "i" };
  }

  if (query.status) {
    filter.status = query.status;
  }

  if (query.category) {
    filter.category = query.category;
  }

  if (query.author) {
    filter.author = query.author;
  }

  // Execute queries
  const [items, total] = await Promise.all([
    find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("author", "username email")
      .populate("category", "name")
      .populate("tags", "name"),
    countDocuments(filter),
  ]);

  return {
    items,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};

const getPostBySlug = async (slug) => {
  const post = await findOne({ slug })
    .populate("author", "username email")
    .populate("category", "name")
    .populate("tags", "name");

  if (!post) {
    throw new Error("Post not found");
  }

  // Increment views
  post.views += 1;
  await post.save();

  return post;
};

const updatePost = async (id, data, userId) => {
  const post = await findById(id);

  if (!post) {
    throw new Error("Post not found");
  }

  // Check ownership
  if (post.author.toString() !== userId) {
    throw new Error("Unauthorized to update this post");
  }

  // Update slug if title changed
  if (data.title && data.title !== post.title) {
    data.slug = slugify(data.title);
  }

  // Update post
  Object.assign(post, data);
  await post.save();

  await post.populate("author", "username email");
  await post.populate("category", "name");
  await post.populate("tags", "name");

  return post;
};

const deletePost = async (id, userId) => {
  const post = await findById(id);

  if (!post) {
    throw new Error("Post not found");
  }

  // Check ownership
  if (post.author.toString() !== userId) {
    throw new Error("Unauthorized to delete this post");
  }

  await post.deleteOne();
  return { message: "Post deleted successfully" };
};

const likePost = async (id, userId) => {
  const post = await findById(id);

  if (!post) {
    throw new Error("Post not found");
  }

  // Check if already liked
  const likeIndex = post.likes.indexOf(userId);

  if (likeIndex > -1) {
    // Unlike
    post.likes.splice(likeIndex, 1);
  } else {
    // Like
    post.likes.push(userId);
  }

  await post.save();
  return post;
};

export {
  createPost,
  listPosts,
  getPostBySlug,
  updatePost,
  deletePost,
  likePost,
};
