import { Request, Response, NextFunction } from "express";
import HttpStatus from "../../global/utils/http-status-codes";
import { ApiError, errorMessages } from "../../global/utils/errors";
import { verifyAccessToken } from "../utils/jwt-utils";
import { Roles } from "../../global/utils/constants";

// check user authorization and populate req.userId
export function userAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;

    // Check for presence and format of Authorization header
    if (!authHeader || !authHeader.startsWith("Bearer "))
      throw new ApiError(HttpStatus.UNAUTHORIZED, errorMessages.UNAUTHORIZED);

    // Extract the token string
    const token = authHeader.split(" ")[1];

    const payload = verifyAccessToken(token);
    if (!payload || payload.role != Roles.User)
      throw new ApiError(
        HttpStatus.UNAUTHORIZED,
        errorMessages.INVALID_ACCESS_TOKEN
      );

    req.userId = payload.id;
    next();
  } catch (error) {
    next(error);
  }
}

export function adminAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;

    // Check for presence and format of Authorization header
    if (!authHeader || !authHeader.startsWith("Bearer "))
      throw new ApiError(HttpStatus.UNAUTHORIZED, errorMessages.UNAUTHORIZED);

    // Extract the token string
    const token = authHeader.split(" ")[1];

    const payload = verifyAccessToken(token);
    if (!payload || payload.role != Roles.Admin)
      throw new ApiError(
        HttpStatus.UNAUTHORIZED,
        errorMessages.INVALID_ACCESS_TOKEN
      );

    next();
  } catch (error) {
    next(error);
  }
}
