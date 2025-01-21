import express from 'express';
import authController from '../controllers/authController';
import { loginSchema, registerSchema } from '../schemas/authValidation';
import { validate } from '../middlewares/validate';

const router = express.Router();


// Register route
router.post('/register', validate(registerSchema), authController.register);

// Login route
router.post('/login',  validate(loginSchema), authController.login);

// Logout route
router.post('/logout', authController.logout);

export default router;