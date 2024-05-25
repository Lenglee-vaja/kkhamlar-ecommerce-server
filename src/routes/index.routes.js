import express from "express";
import AuthController from "../controllers/auth.controller.js";

const router = express.Router();

//=============AuthController==================
router.post("/auth/sign-up", AuthController.signUp)

export default router