import Router from "express";
import validBodyRequest from "../middlewares/validBodyRequest.js";
import { checkPermission } from "../middlewares/checkPermission.js";
import { checkAuth } from "../middlewares/checkAuth.js";
import {
  categoryCreateSchema,
  categoryUpdateSchema,
} from "../schemas/category.schema.js";
import {
  createCategory,
  getCategories,
  getCategory,
  removeCategory,
  updateCategory,
} from "../controllers/category.controller.js";

const categoryRoutes = Router();

categoryRoutes.get("/", getCategories);
categoryRoutes.get("/:id", getCategory);

// * admin, superAdmin
categoryRoutes.use(checkAuth, checkPermission(["admin", "superAdmin"]));
categoryRoutes.delete("/:id", removeCategory);
categoryRoutes.post(
  "/",
  validBodyRequest(categoryCreateSchema),
  createCategory
);
categoryRoutes.patch(
  "/:id",
  validBodyRequest(categoryUpdateSchema),
  updateCategory
);

export default categoryRoutes;
