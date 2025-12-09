import Router from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import validBodyRequest from "../middlewares/validBodyRequest.js";
import {
  productCreateSchema,
  productUpdateSchema,
} from "../schemas/product.schema.js";

const productRoutes = Router();

productRoutes.post("/", validBodyRequest(productCreateSchema), createProduct);
productRoutes.get("/", getProducts);
// productRoutes.get("/:id");
productRoutes.patch(
  "/:id",
  validBodyRequest(productUpdateSchema),
  updateProduct
);
// productRoutes.delete("/:id");

export default productRoutes;
