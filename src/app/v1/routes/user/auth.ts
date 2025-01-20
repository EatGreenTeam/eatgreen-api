import express from "express";
import authController from "../../controllers/auth-controller";
import { validateRequestBody } from "../../middlewares/validator-middleware";
import {
  loginSchema,
  refreshTokenSchema,
  registerSchema,
} from "../../middlewares/validators/auth";

const router = express.Router();

// // Register user
// router.post(
//   "/register",
//   validateRequestBody(registerSchema),
//   authController.register
// );

// // Log user in and send access token
// router.post(
//   "/login",
//   validateRequestBody(loginSchema),
//   authController.login
// );

// // Register user
// router.post(
//   "/refreshToken",
//   validateRequestBody(refreshTokenSchema),
//   authController.refreshAccessToken
// );

export default router;
