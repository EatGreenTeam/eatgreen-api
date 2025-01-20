import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import httpStatus from "../../global/utils/http-status-codes";
import { errorMessages } from "../../global/utils/errors";

export function validateRequestQuery(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query, { abortEarly: false });

    if (error) {
      return res.status(httpStatus.BAD_REQUEST).json({
        msg: errorMessages.BAD_REQUEST,
        errors: error.details.map((err) => ({
          message: err.message,
          path: err.path,
        })),
      });
    }
    next();
  };
}

export function validateRequestBody(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(httpStatus.BAD_REQUEST).json({
        msg: errorMessages.BAD_REQUEST,
        errors: error.details.map((err) => ({
          message: err.message,
          path: err.path,
        })),
      });
    }
    next();
  };
}
