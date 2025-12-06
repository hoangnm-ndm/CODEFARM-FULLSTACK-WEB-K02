import Router from "express";
import { createProduct } from "../controllers/product.controller.js";

const productRoutes = Router();

productRoutes.post("/", createProduct);
// productRoutes.get("/");
// productRoutes.get("/:id");
// productRoutes.patch("");
// productRoutes.delete("/:id");

export default productRoutes;
