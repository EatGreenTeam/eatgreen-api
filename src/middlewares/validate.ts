import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

/**
 * Middleware to validate request data using a Joi schema.
 * @param schema - The Joi schema to validate against.
 * @param type - The part of the request to validate ('body', 'query', or 'params').
 */
export const validate = (schema: Joi.ObjectSchema, type: 'body' | 'query' | 'params' = 'body') => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      res.status(400).json({ message: 'Validation error', errors });
      return;
    }

    next(); // Proceed to the next middleware or route handler
  };
};