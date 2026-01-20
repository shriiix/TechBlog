import { Schema, model } from "mongoose";

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Tag = model("Tag", tagSchema);

export const findOne = (query) => Tag.findOne(query);
export const create = (data) => Tag.create(data);
export const find = (query) => Tag.find(query);
export const findById = (id) => Tag.findById(id);

export default Tag;
