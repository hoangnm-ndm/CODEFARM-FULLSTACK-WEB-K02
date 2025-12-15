import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import validBodyRequest from "../middlewares/validBodyRequest.js";
import { signInSchema, signUpSchema } from "../schemas/user.schema.js";

const authRoutes = Router();

authRoutes.post("/signup", validBodyRequest(signUpSchema), signUp);
authRoutes.post("/signin", validBodyRequest(signInSchema), signIn);

export default authRoutes;
