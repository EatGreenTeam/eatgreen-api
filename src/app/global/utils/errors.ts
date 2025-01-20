export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    // Set the prototype explicitly for built-in Error subclassing
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export const errorMessages = {
  API_ENDPOINT_NOT_FOUND_ERR: "Api endpoint not found",
  SERVER_ERR: "Something went wrong",

  AUTH_HEADER_MISSING_ERR: "auth header is missing",
  AUTH_TOKEN_MISSING_ERR: "auth token is missing",

  USER_NOT_FOUND_ERR: "User not found",
  EMAIL_ALREADY_EXISTS: "Email address already exists",
  LOGIN_CREDENTIAL_ERR: "Wrong email and/or Password",
  INVALID_USER_TYPE: "Invalid user type.",
  UNAUTHORIZED: "Unauthorized",
  INVALID_ACCESS_TOKEN: "Invalid access token",

  INTERNAL_SERVER_ERROR: "Internal Server Error",
  NOT_FOUND: "Not Found",
  BAD_REQUEST: "Bad Request",
};
