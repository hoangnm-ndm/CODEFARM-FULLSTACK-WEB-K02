/** ROLE BASE ACCESS CONTROL */

import createError from "../utils/createError.js";

export const checkPermission = (roles) => (req, res, next) => {
  const checkRole = roles.includes(req.user.role);
  if (!checkRole) return createError(res, 401, "Forbiden: Ban khong co quyen!");
  next();
};
