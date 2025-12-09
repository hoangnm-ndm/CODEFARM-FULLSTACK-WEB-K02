import createError from "../utils/createError.js";

function notFoundRequest(req, res) {
  return createError(res, 404, "Not found");
}

export default notFoundRequest;
