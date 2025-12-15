import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { JWT_SECRET } from "../configs/dotenvConfig.js";

import User from "../models/User.js";
import handleAsync from "../utils/handleAsync.js";
import createError from "../utils/createError.js";
import createResponse from "../utils/createResponse.js";

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

  if (!userExist) return createError(res, 400, "Nguoi dung khong ton tai!");

  const isMatched = bcrypt.compareSync(password, userExist.password);

  if (!isMatched)
    return createError(res, 400, "Email hoac password chua dung!");

  const accessToken = jwt.sign({ _id: userExist._id }, JWT_SECRET);

  createResponse(res, 200, "Dang nhap thanh cong", {
    user: userExist,
    accessToken,
  });
});
