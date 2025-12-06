import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  console.log(req.body);

  console.log({ Product });
  const product = await Product.create(req.body);
  console.log({ product });

  return res.status(201).json({
    message: "Create successfully!",
    data: product,
  });
};
