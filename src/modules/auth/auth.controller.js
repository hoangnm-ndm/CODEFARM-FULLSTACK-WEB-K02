import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
  JWT_EXPIRES_IN,
  JWT_REFRESH,
  JWT_REFRESH_EXPRIRES,
  JWT_SECRET,
} from "../../shared/configs/dotenvConfig.js";

import User from "../user/user.model.js";
import handleAsync from "../../shared/utils/handleAsync.js";
import createError from "../../shared/utils/createError.js";
import createResponse from "../../shared/utils/createResponse.js";

export const signUp = handleAsync(async (req, res) => {
  const { email, password, fullname } = req.body;
  /**
   * * Bước 1: Kiểm tra thông tin đăng ký có bị trùng khớp không?
   * * Bước 2: Mã hoá mật khẩu.
   * * Bước 3: Tạo user và thông báo thành công
   */

  const userExist = await User.findOne({ email });

  if (userExist) return createError(res, 400, "Email đã được sử dụng!");

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = await User.create({ email, password: hash, fullname });

  user.password = undefined;

  createResponse(res, 201, "Dang ky thanh cong", user);
});

export const signIn = handleAsync(async (req, res) => {
  const { email, password } = req.body;
  /**
   * * Bước 1: Kiểm tra xem người dùng có thật không?
   * * Bước 2: So sánh password.
   * * Bước 3: Dùng JWT để cung cấp cho người dùng quyền truy cập ở những lần sau.
   */

  const userExist = await User.findOne({ email });

  if (!userExist)
    return createError(res, 400, "Email hoac password chua dung!");

  const isMatched = bcrypt.compareSync(password, userExist.password);

  if (!isMatched)
    return createError(res, 400, "Email hoac password chua dung!");

  const accessToken = jwt.sign({ _id: userExist._id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
  const refreshToken = jwt.sign({ _id: userExist._id }, JWT_REFRESH, {
    expiresIn: JWT_REFRESH_EXPRIRES,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, // JS Không đọc được
    secure: false, // Chỉ gửi qua https
    sameSite: "strict", // Chống CSRF,
  });

  userExist.refreshToken = refreshToken;
  await userExist.save();

  // * Cách 1: Chuyển JWT về client thông qua JSON.
  createResponse(res, 200, "Dang nhap thanh cong", {
    user: userExist,
    accessToken,
  });

  // * Cách 2: chuyển JWT về qua cookies
});

/**
 * * Refresh Token
 * * Đổi mật khẩu
 * * Quên mật khẩu
 * * Cập nhật thông tin người dùng
 * * Get profile me
 */

export const refreshToken = handleAsync(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return createError(res, 401, "Unauthenticated");
  const payload = jwt.verify(refreshToken, JWT_REFRESH);
  const user = await User.findOne({ refreshToken: refreshToken });
  if (!payload || !user) return createError(res, 401, "Refresh Token Invalid");
  const accessToken = jwt.sign({ _id: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
  const newRefreshToken = jwt.sign({ _id: user._id }, JWT_REFRESH, {
    expiresIn: JWT_REFRESH_EXPRIRES,
  });
  user.refreshToken = newRefreshToken;
  await user.save();

  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true, // JS Không đọc được
    secure: false, // Chỉ gửi qua https
    sameSite: "strict", // Chống CSRF,
  });

  return createResponse(res, 200, "OK", accessToken);
});
