import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["reader", "author", "admin"],
    default: "reader",
  },
});

const User = model("User", userSchema);

export const findOne = (query) => User.findOne(query);
export const create = (data) => User.create(data);
export const findById = (id) => User.findById(id);
export const updateOne = (query, data) => User.updateOne(query, data);
export const deleteOne = (query) => User.deleteOne(query);

export default User;
