import createError from "./createError.js";

const handleAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => {
    createError(res, 500, "Server Error!", err);
  });
};

export default handleAsync;
