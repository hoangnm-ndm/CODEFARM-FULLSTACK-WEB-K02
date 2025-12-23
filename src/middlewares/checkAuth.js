import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../configs/dotenvConfig.js";
import User from "../models/User.js";
import createError from "../utils/createError.js";

export const checkAuth = async (req, res, next) => {
  const token = req.headers?.authorization.split(" ")[1];
  const decoded = jwt.verify(token, JWT_SECRET);
  const userExist = await User.findById(decoded._id);
  if (!userExist) return createError(res, 404, "Unauthorized");
  req.user = userExist;
  next();
};
