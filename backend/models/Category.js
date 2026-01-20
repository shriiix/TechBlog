import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true } // ✅ correct place
);

const Category = model("Category", categorySchema);

export const findOne = (query) => Category.findOne(query);
export const create = (data) => Category.create(data);
export const find = (query) => Category.find(query);
export const findById = (id) => Category.findById(id);

export default Category;
