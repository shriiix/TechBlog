import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 5000;
export const mongoUri =
  process.env.MONGO_URI || "mongodb://localhost:27017/tech-blog";
export const jwtSecret = process.env.JWT_SECRET || "myBlogSuperSecretKey";
export const jwtExpiresIn = "1d";
