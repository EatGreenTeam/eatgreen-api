import { Request, Response, NextFunction } from "express";
import { ApiError, errorMessages } from "../../global/utils/errors";
import httpStatus from "../../global/utils/http-status-codes";
import {
  hashPassword,
  checkPassword,
} from "../utils/auth-utils";
import {
  generateUserAccessToken,
  generateAdminAccessToken,
  generateUserRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt-utils";
import {
  Roles,
} from "../../global/utils/constants";
import config from "../../config";

 // TODO: implement auth controller
// const userService = new UserService();

export default {
  // register: async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { username, email, password, type } = req.body;
  //     // check if email already exist in database
  //     if (await userService.emailExists(email))
  //       throw new ApiError(
  //         httpStatus.CONFLICT,
  //         errorMessages.EMAIL_ALREADY_EXISTS
  //       );

  //     const hashedPasswd = await hashPassword(password); // hash user password

  //     const userData = {
  //       username,
  //       email,
  //       password: hashedPasswd,
  //       type,
  //       joinedAt: Date.now(),
  //     };

  //     // register user in database
  //     const userId = await userService.create(userData);

  //     if (!(await userService.exists(userId)))
  //       throw new ApiError(
  //         httpStatus.INTERNAL_SERVER_ERROR,
  //         "Error user registration failed"
  //       );

  //     // user registerd
  //     res.status(httpStatus.CREATED).json({
  //       type: "success",
  //       message: "User created successfully",
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // login: async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { email, password } = req.body;

  //     // get user by email address
  //     const user = await userService.getByEmail(email);

  //     // check if user exists
  //     if (!user)
  //       throw new ApiError(
  //         httpStatus.UNAUTHORIZED,
  //         errorMessages.LOGIN_CREDENTIAL_ERR
  //       );

  //     // check if password and hashed user password match
  //     const passwordMatch = await checkPassword(user.password, password);

  //     if (!passwordMatch) {
  //       throw new ApiError(
  //         httpStatus.UNAUTHORIZED,
  //         errorMessages.LOGIN_CREDENTIAL_ERR
  //       );
  //     }
      
  //     // generate access token
  //     const accessToken = generateUserAccessToken(user);
  //     const refreshToken = generateUserRefreshToken(user);

  //     // user logged In
  //     res.status(httpStatus.OK).json({
  //       message: "User logged In",
  //       type: user.type,
  //       accessToken: accessToken,
  //       refreshToken: refreshToken,
  //     });
  //   } catch (e) {
  //     next(e);
  //   }
  // },

  // refreshAccessToken: async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) => {
  //   try {
  //     const { refreshToken } = req.body;

  //     const payload = verifyRefreshToken(refreshToken);
  //     if (!payload || payload.role != Roles.User)
  //       throw new ApiError(
  //         httpStatus.UNAUTHORIZED,
  //         errorMessages.INVALID_ACCESS_TOKEN
  //       );

  //     const user = await userService.get(payload.id);

  //     // generate access token
  //     const accessToken = generateUserAccessToken(user);

  //     // user logged In
  //     res.status(httpStatus.OK).json({
  //       accessToken: accessToken,
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // adminLogin: async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { username, password } = req.body;

  //     if (
  //       username === config.ADMIN_USERNAME &&
  //       password === config.ADMIN_PASSWORD
  //     ) {
  //       const token = generateAdminAccessToken(username);
  //       res.json({ token });
  //     } else {
  //       throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid credentials");
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // },
};
