import Router from "express";
import productRoutes from "./product.routes.js";
import authRoutes from "./auth.routes.js";
import categoryRoutes from "./category.routes.js";
const router = Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/auth", authRoutes);

export default router;
