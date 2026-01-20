import jwt from "jsonwebtoken";
const { sign, verify } = jwt;

import { jwtSecret, jwtExpiresIn } from "../config/env.js";

const signToken = (payload) => {
  return sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
};

const verifyToken = (token) => {
  return verify(token, jwtSecret);
};

export { signToken, verifyToken };
