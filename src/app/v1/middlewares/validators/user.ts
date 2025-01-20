import Joi from "joi";

export const userProfileEditSchema = Joi.object({
  username: Joi.string().required(),
}).unknown(false); // This ensures no extra fields are allowed
