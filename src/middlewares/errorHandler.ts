import { Request, Response, NextFunction } from 'express';
import { errorMessages, httpStatus } from '../constants/errors';
import { AppError } from '../utils/AppError';


// // Express automatically knows that this entire function is an error handling middleware by specifying 4 parameters
// export function globalErrorHandler(
//     error: ApiError | Error,
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) {
//     console.error(error);
//     const statusCode =
//       (error as ApiError).statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
//     const message = error.message || errorMessages.SERVER_ERR;
  
//     res.status(statusCode).json({
//       type: "error",
//       message,
//     });
//   }
export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err.stack);

  if (err instanceof AppError) {
    // Handle operational errors
    res.status(err.statusCode).json({
      message: err.message,
      status: 'error',
      statusCode: err.statusCode,
    });
    return;
  }

  // Handle unknown errors
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    message: 'Internal server error',
    status: 'error',
    statusCode: httpStatus.INTERNAL_SERVER_ERROR,
  });
};

export const undefinedRouteErrorHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const error = new AppError(
        httpStatus.NOT_FOUND,
        errorMessages.NOT_FOUND,
    );
       next(error);
}