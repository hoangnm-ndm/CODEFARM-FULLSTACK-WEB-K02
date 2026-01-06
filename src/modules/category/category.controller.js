import createError from "../../shared/utils/createError.js";
import createResponse from "../../shared/utils/createResponse.js";
import handleAsync from "../../shared/utils/handleAsync.js";
import { queryBuilder } from "../../shared/utils/query-builder.js";
import { addSlugUtils } from "../../shared/utils/slugUtils.js";
import Category from "./category.model.js";

export const createCategory = handleAsync(async (req, res) => {
  const slug = addSlugUtils(req.body.title);
  const category = await Category.create({ ...req.body, slug });
  createResponse(res, 201, "Create successfully!", category);
});

export const getCategories = handleAsync(async (req, res) => {
  const data = await queryBuilder(Category, req.query);
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
  const slug = addSlugUtils(req.body.title);
  const data = await Category.findByIdAndUpdate(
    req.params.id,
    { ...req.body, slug },
    {
      new: true,
    }
  );
  createResponse(res, 200, "Update successfully!", data);
});

export const removeCategory = handleAsync(async (req, res) => {
  const data = await Category.findByIdAndDelete(req.params.id);
  if (!data) {
    return createError(res, 400, "Not found");
  }
  return createResponse(res, 200, "Remove successfully!", data);
});
