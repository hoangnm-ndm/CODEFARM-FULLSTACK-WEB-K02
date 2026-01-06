import Router from "express";
import validBodyRequest from "../../shared/middlewares/validBodyRequest.js";
import { checkPermission } from "../../shared/middlewares/checkPermission.js";
import { checkAuth } from "../../shared/middlewares/checkAuth.js";
import {
  categoryCreateSchema,
  categoryUpdateSchema,
} from "./category.schema.js";
import {
  createCategory,
  getCategories,
  getCategory,
  removeCategory,
  updateCategory,
} from "./category.controller.js";

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
