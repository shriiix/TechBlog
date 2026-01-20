import { connect } from "mongoose";
import { mongoUri } from "./env.js";

const connectDB = async () => {
  try {
    await connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export { connectDB };
