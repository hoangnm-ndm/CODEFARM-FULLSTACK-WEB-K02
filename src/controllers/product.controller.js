import Product from "../models/Product.js";
import createError from "../utils/createError.js";
import createResponse from "../utils/createResponse.js";
import handleAsync from "../utils/handleAsync.js";

export const createProduct = handleAsync(async (req, res) => {
  const product = await Product.create(req.body);
  createResponse(res, 201, "Create successfully!", product);
});

export const getProducts = handleAsync(async (req, res) => {
  const data = await Product.find();
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

// * findByIdAndUpdate = PATCH
// * findOneAndReplace = PUT
