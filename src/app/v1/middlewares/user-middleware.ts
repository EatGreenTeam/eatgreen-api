import { Request, Response, NextFunction } from "express";
import { ApiError, errorMessages } from "../../global/utils/errors";
import HttpStatus from "../../global/utils/http-status-codes";


// middleware should be used after auth middleware
export async function fetchUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.userId!;
    // const user = await userService.get(id); // TODO: fetch user by id here

    // if (!user)
    //   throw new ApiError(HttpStatus.NOT_FOUND, errorMessages.NOT_FOUND);

    // req.user = user;

    next();
  } catch (error) {
    next(error);
  }
}
