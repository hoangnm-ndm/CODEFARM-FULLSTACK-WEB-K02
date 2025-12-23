import Category from "../models/Category.js";
import createError from "../utils/createError.js";
import createResponse from "../utils/createResponse.js";
import handleAsync from "../utils/handleAsync.js";

export const createCategory = handleAsync(async (req, res) => {
  const category = await Category.create(req.body);
  createResponse(res, 201, "Create successfully!", category);
});

export const getCategories = handleAsync(async (req, res) => {
  const data = await Category.find();
  if (data.length === 0) {
    return createError(res, 400, "Not found");
  }
  createResponse(res, 200, "Successfully!", data);
});

export const getCategory = handleAsync(async (req, res) => {
  const data = await Category.findById(req.params.id);
  if (data) {
    return createError(res, 400, "Not found");
  }
  createResponse(res, 200, "Successfully!", data);
});

export const updateCategory = handleAsync(async (req, res) => {
  const data = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  createResponse(res, 200, "Update successfully!", data);
});

export const removeCategory = handleAsync(async (req, res) => {
  const data = await Category.findByIdAndDelete(req.params.id);
  if (!data) {
    return createError(res, 400, "Not found");
  }
  return createResponse(res, 200, "Remove successfully!", data);
});
