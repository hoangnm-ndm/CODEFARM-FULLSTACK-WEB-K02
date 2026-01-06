import createError from "../../shared/utils/createError.js";
import createResponse from "../../shared/utils/createResponse.js";
import handleAsync from "../../shared/utils/handleAsync.js";
import Product from "./product.model.js";

export const createProduct = handleAsync(async (req, res) => {
  const product = await Product.create(req.body);
  createResponse(res, 201, "Create successfully!", product);
});

export const getProducts = handleAsync(async (req, res) => {
  const data = await Product.find().populate("category");
  if (data.length === 0) {
    return createError(res, 400, "Not found");
  }
  createResponse(res, 200, "Successfully!", data);
});
export const getProduct = handleAsync(async (req, res) => {
  const data = await Product.findById(req.params.id).populate("category");
  if (data.length === 0) {
    return createError(res, 400, "Not found");
  }
  createResponse(res, 200, "Successfully!", data);
});

export const updateProduct = handleAsync(async (req, res) => {
  const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  createResponse(res, 200, "Update successfully!", data);
});

export const removeProduct = handleAsync(async (req, res) => {
  const data = await Product.findByIdAndDelete(req.params.id);
  console.log(data);
  if (!data) {
    return createError(res, 400, "Not found");
  }
  return createResponse(res, 200, "Remove successfully!", data);
});

// * findByIdAndUpdate = PATCH
// * findOneAndReplace = PUT
