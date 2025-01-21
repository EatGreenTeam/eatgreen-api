import { httpStatus, errorMessages } from '../constants/errors';

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(
      statusCode: number = httpStatus.INTERNAL_SERVER_ERROR,
    message: string = errorMessages.INTERNAL_SERVER_ERROR,
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Ensure the error prototype is set correctly
    Object.setPrototypeOf(this, AppError.prototype);
  }
}