import { Request, Response, NextFunction } from "express";
import { ApiError, errorMessages } from "../utils/errors";
import HttpStatus from "../utils/http-status-codes";

// Express automatically knows that this entire function is an error handling middleware by specifying 4 parameters
export function globalErrorHandler(
  error: ApiError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);
  const statusCode =
    (error as ApiError).statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = error.message || errorMessages.SERVER_ERR;

  res.status(statusCode).json({
    type: "error",
    message,
  });
}

export function undefinedRouteErrorHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error = new ApiError(
    HttpStatus.NOT_FOUND,
    errorMessages.API_ENDPOINT_NOT_FOUND_ERR
  );
  next(error);
}
