import bcrypt from "bcrypt";
import { ApiError } from "../../global/utils/errors";
import httpStatus from "../../global/utils/http-status-codes";

export async function hashPassword(password: string) {
  const saltRounds = 10;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.error(error);
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Error hashing password"
    ); // Or handle the error appropriately
  }
}

export async function checkPassword(hashedPassword: string, password: string) {
  return await bcrypt.compare(password, hashedPassword);
}
