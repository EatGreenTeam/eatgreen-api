import express from "express";
import authRouter from "./auth";
import profileRouter from "./profile";
import { userAuth } from "../../middlewares/auth-middleware";
import { fetchUser } from "../../middlewares/user-middleware";

const router = express.Router();

router.use("/", authRouter);
// router.use("/me", userAuth, fetchUser, profileRouter);

export default router;
