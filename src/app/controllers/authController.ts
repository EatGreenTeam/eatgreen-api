import { Request, Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import config from '../config';
import { httpStatus } from '../constants/errors';
import { AppError } from '../utils/AppError';


export default {

  // Register a new user
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, username, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new AppError(httpStatus.CONFLICT, 'User already exists');
      }

      // Create new user
      const user = new User({ email, username, password });
      await user.save();

      res.status(httpStatus.CREATED).json({ message: 'User registered successfully', user });
    } catch (error) {
      next(error); // Pass the error to the error handler
    }
  },

  // Login a user
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid email or password');
      }

      // Validate password
      const isValidPassword = await user.validatePassword(password);
      if (!isValidPassword) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid email or password');
      }

      // Generate JWT token
      const token = jwt.sign({ email: user.email }, config.JWT_SECRET!, { expiresIn: '1h' });

      res.status(httpStatus.OK).json({ message: 'Login successful', token });
    } catch (error) {
      next(error); // Pass the error to the error handler
    }
  },

  // Logout (client-side token invalidation)
  logout: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(httpStatus.OK).json({ message: 'Logout successful' });
    } catch (error) {
      next(error); // Pass the error to the error handler
    }
  }

}