import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import config from "./config";

import {
  globalErrorHandler,
  undefinedRouteErrorHandler,
} from "./global/middlewares/error-handlers";
import HttpStatus from "./global/utils/http-status-codes";

// Import app routes
import v1Router from "./v1/routes";

// Create Express app
const app = express();

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 100, // Allow up to 100 requests per IP per window
});

// Use middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(limiter);

if (config.NODE_ENV === "production") {
  app.use(morgan("combined")); // 'combined' in production for more detailed logs
} else {
  app.use(morgan("dev")); // 'dev' in development for quicker, color-coded logs
}

// Routes
app.get("/", (req: Request, res: Response) => {
  res.status(HttpStatus.OK).send({
    msg: "server is up and running"
  });
});

app.use("/v1", v1Router);

// Page not found error handling and global error handling middlewares
app.use("*", undefinedRouteErrorHandler);
app.use(globalErrorHandler);

export default app;
