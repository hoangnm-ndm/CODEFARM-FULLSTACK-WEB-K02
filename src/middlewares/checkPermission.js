/** ROLE BASE ACCESS CONTROL */

import createError from "../utils/createError.js";

export const checkPermission = (roles) => (req, res, next) => {
  console.log(roles);
  console.log(req.user);
  const role = req.user.role;
  const checkRole = roles.includes(role);
  console.log(checkRole);
  if (!checkRole) return createError(res, 401, "Forbiden: Ban khong co quyen!");
  next();
};
