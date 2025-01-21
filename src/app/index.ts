import express,  { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes';
import connectDB from './utils/db';
import { errorHandler, undefinedRouteErrorHandler } from './middlewares/errorHandler';
import { authRateLimiter } from './middlewares/rateLimiter';
import { httpStatus } from './constants/errors';
import swaggerJSDoc from 'swagger-jsdoc';
import { setupSwagger } from './utils/swagger';


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev')); // Log HTTP requests


// Apply rate limiting globally
app.use(authRateLimiter);


// Routes
// Routes
app.get("/", (req: Request, res: Response) => {
    res.status(httpStatus.OK).send({
      msg: "server is up and running"
    });
  });

app.use('/auth', authRoutes);

setupSwagger(app)

// Add error handler middleware
app.use("*", undefinedRouteErrorHandler);
app.use(errorHandler);

// Connect to MongoDB
connectDB();

export default app;
