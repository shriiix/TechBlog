const { z } = require("zod");

const createCommentSchema = {
  body: z.object({
    content: z
      .string()
      .min(1, "Comment cannot be empty")
      .max(1000, "Comment too long"),
    parent: z.string().optional(), // For nested comments
  }),
};

const updateCommentSchema = {
  body: z.object({
    content: z
      .string()
      .min(1, "Comment cannot be empty")
      .max(1000, "Comment too long"),
  }),
};

module.exports = {
  createCommentSchema,
  updateCommentSchema,
};
