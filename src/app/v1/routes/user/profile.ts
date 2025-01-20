import express from "express";
import { validateRequestBody } from "../../middlewares/validator-middleware";
import { userProfileEditSchema } from "../../middlewares/validators/user";
const router = express.Router();

// // get user's profile information
// router.get("/", userController.getProfile);

// // edit user's profile
// router.put(
//   "/edit",
//   validateRequestBody(userProfileEditSchema),
//   userController.editProfile
// );

export default router;
