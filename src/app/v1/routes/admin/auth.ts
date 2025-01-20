import express from "express";
import authController from "../../controllers/auth-controller";
import { validateRequestBody } from "../../middlewares/validator-middleware";
import { adminLoginSchema } from "../../middlewares/validators/auth";

const router = express.Router();

// Log user in and send access token
// router.post(
//   "/login",
//   validateRequestBody(adminLoginSchema),
//   authController.adminLogin
// );

export default router;
