import {
  register as _register,
  login as _login,
} from "../services/authService";

const register = async (req, res, next) => {
  try {
    const result = await _register(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await _login(req.body);
    res.json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    // Add your logout logic here (e.g., invalidate refresh token)
    res.json({
      success: true,
      message: "Logout successful",
    });
  } catch (err) {
    next(err);
  }
};

export default { register, login, logout };
