import jwt from "jsonwebtoken";
import config from "../config"; // Assuming JWT_SECRET is exported from config
import { Roles } from "../../global/utils/constants";

export function generateUserAccessToken(user: any): string {
  const payload = {
    id: user.id,
    email: user.email,
    role: Roles.User,
  };

  const accessToken = jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return accessToken;
}

export function generateUserRefreshToken(user: any): string {
  const payload = {
    id: user.id,
    email: user.email,
    role: Roles.User,
  };

  const refreshToken = jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: "30d",
  });
  return refreshToken;
}

export function generateAdminAccessToken(adminUsername: string): string {
  const payload = {
    username: adminUsername,
    role: Roles.Admin,
  };

  const accessToken = jwt.sign(payload, config.JWT_SECRET);
  return accessToken;
}

export function verifyAccessToken(accessToken: string): jwt.JwtPayload | null {
  try {
    const decoded = jwt.verify(
      accessToken,
      config.JWT_SECRET
    ) as jwt.JwtPayload;
    return decoded;
  } catch {
    return null;
  }
}

export function verifyRefreshToken(
  refreshToken: string
): jwt.JwtPayload | null {
  try {
    const decoded = jwt.verify(
      refreshToken,
      config.JWT_SECRET
    ) as jwt.JwtPayload;
    return decoded;
  } catch {
    return null;
  }
}
