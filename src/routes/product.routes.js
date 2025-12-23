import Router from "express";
import {
  createProduct,
  getProduct,
  getProducts,
  removeProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import validBodyRequest from "../middlewares/validBodyRequest.js";
import {
  productCreateSchema,
  productUpdateSchema,
} from "../schemas/product.schema.js";
import { checkPermission } from "../middlewares/checkPermission.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const productRoutes = Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProduct);

// * admin, superAdmin
productRoutes.use(checkAuth, checkPermission(["admin", "superAdmin"]));
productRoutes.delete("/:id", removeProduct);
productRoutes.post("/", validBodyRequest(productCreateSchema), createProduct);
productRoutes.patch(
  "/:id",
  validBodyRequest(productUpdateSchema),
  updateProduct
);

export default productRoutes;
