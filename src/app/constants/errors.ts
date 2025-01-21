export const httpStatus = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    TOO_MANY_REQUESTS: 429,
  };

export const errorMessages = {
    // Generic error messages
    INTERNAL_SERVER_ERROR: 'Internal server error',
    INVALID_REQUEST: 'Invalid request',
    NOT_FOUND: 'Resource not found',
    UNAUTHORIZED: 'Unauthorized access',
    FORBIDDEN: 'Forbidden access',
    TOO_MANY_REQUESTS: 'Too many requests, please try again later',
  
    // Auth-related error messages
    USER_ALREADY_EXISTS: 'User already exists',
    INVALID_EMAIL_OR_PASSWORD: 'Invalid email or password',
    INVALID_EMAIL: 'Email must be a valid email address',
    INVALID_PASSWORD: 'Password must be at least 6 characters long',
    INVALID_USERNAME: 'Username must be between 3 and 30 characters long',
};