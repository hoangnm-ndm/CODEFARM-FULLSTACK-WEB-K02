import { Router } from "express";
import { signIn, signUp } from "./auth.controller.js";
import validBodyRequest from "../../shared/middlewares/validBodyRequest.js";
import { signInSchema, signUpSchema } from "../user/user.schema.js";

const authRoutes = Router();

authRoutes.post("/signup", validBodyRequest(signUpSchema), signUp);
authRoutes.post("/signin", validBodyRequest(signInSchema), signIn);

export default authRoutes;
