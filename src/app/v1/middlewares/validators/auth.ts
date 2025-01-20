import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).unknown(false); // This ensures no extra fields are allowed

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).unknown(false); // This ensures no extra fields are allowed

export const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required(),
}).unknown(false); // This ensures no extra fields are allowed

export const adminLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).unknown(false); // This ensures no extra fields are allowed
