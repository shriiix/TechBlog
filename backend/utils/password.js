import { hash, compare } from "bcrypt";
const SALT_ROUNDS = 10;

const hashPassword = async (password) => {
  return await hash(password, SALT_ROUNDS);
};

const comparePassword = async (password, hashedPassword) => {
  return await compare(password, hashedPassword);
};

export { hashPassword, comparePassword };
