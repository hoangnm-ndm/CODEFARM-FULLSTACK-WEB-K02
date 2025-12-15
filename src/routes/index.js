import Router from "express";
import productRoutes from "./product.routes.js";
import authRoutes from "./auth.routes.js";
const router = Router();

router.use("/products", productRoutes);
router.use("/auth", authRoutes);

export default router;
