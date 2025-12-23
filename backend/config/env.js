require("dotenv").config();

// export const port = process.env.PORT || 5000;
// export const mongoUri =
//   process.env.MONGO_URI || "mongodb://localhost:27017/tech-blog";
// export const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret_here";
// export const jwtExpiresIn = "1d";

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/tech-blog",
  jwtSecret: process.env.JWT_SECRET || "myBlogSuperSecretKey",
  jwtExpiresIn: "1d",
};
