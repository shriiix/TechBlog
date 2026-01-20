import { findOne, create, find, findById } from "../models/Tag.js";

const createTag = async (data) => {
  // Check if tag already exists
  const existing = await findOne({ name: data.name });
  if (existing) {
    throw new Error("Tag with this name already exists");
  }

  const tag = await create(data);
  return tag;
};

const getAllTags = async () => {
  const tags = await find().sort({ name: 1 });
  return tags;
};

const getTagById = async (id) => {
  const tag = await findById(id);

  if (!tag) {
    throw new Error("Tag not found");
  }

  return tag;
};

const updateTag = async (id, data) => {
  const tag = await findById(id);

  if (!tag) {
    throw new Error("Tag not found");
  }

  // Check for duplicate name
  if (data.name && data.name !== tag.name) {
    const existing = await findOne({ name: data.name });
    if (existing) {
      throw new Error("Tag with this name already exists");
    }
  }

  Object.assign(tag, data);
  await tag.save();

  return tag;
};

const deleteTag = async (id) => {
  const tag = await findById(id);

  if (!tag) {
    throw new Error("Tag not found");
  }

  await tag.deleteOne();
  return { message: "Tag deleted successfully" };
};

export { createTag, getAllTags, getTagById, updateTag, deleteTag };
