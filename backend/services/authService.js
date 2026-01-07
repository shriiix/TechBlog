const User = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/password");
const { signToken } = require("../utils/jwt");

const register = async ({ username, email, password }) => {
  // Check if user already exists
  const existing = await User.findOne({ $or: [{ email }, { username }] });
  if (existing) {
    throw new Error("User with this email or username already exists");
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  // Generate token
  const token = signToken({ userId: user._id, role: user.role });

  // Return user without password
  const userObj = user.toObject();
  delete userObj.password;

  return { user: userObj, token };
};

const login = async ({ email, password }) => {
  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Verify password
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // Generate token
  const token = signToken({ userId: user._id, role: user.role });

  // Return user without password
  const userObj = user.toObject();
  delete userObj.password;

  return { user: userObj, token };
};

module.exports = { register, login };
