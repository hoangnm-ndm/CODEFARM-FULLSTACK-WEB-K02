import Router from "express";
import {
  createProduct,
  getProduct,
  getProducts,
  removeProduct,
  updateProduct,
} from "./product.controller.js";
import validBodyRequest from "../../shared/middlewares/validBodyRequest.js";
import { productCreateSchema, productUpdateSchema } from "./product.schema.js";
import { checkPermission } from "../../shared/middlewares/checkPermission.js";
import { checkAuth } from "../../shared/middlewares/checkAuth.js";

const productRoutes = Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProduct);

// * admin, superAdmin
// productRoutes.use(checkAuth, checkPermission(["admin", "superAdmin"]));
productRoutes.delete("/:id", removeProduct);
productRoutes.post("/", validBodyRequest(productCreateSchema), createProduct);
productRoutes.patch(
  "/:id",
  validBodyRequest(productUpdateSchema),
  updateProduct,
);

export default productRoutes;
