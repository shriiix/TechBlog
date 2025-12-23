import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userSchema: {
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

export default model("User", userSchema);
