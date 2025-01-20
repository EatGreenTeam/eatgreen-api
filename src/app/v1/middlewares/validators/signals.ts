import { limit } from "firebase/firestore";
import Joi from "joi";
import { positiveIntegerSchema } from "./shared-schemas";

// export const signalQuerySchema = Joi.object({
//   labelPrefix: Joi.string().optional(),
//   sort: Joi.string().valid("id", "label").optional(),
//   order: Joi.string().valid("asc", "desc").optional(),
//   limit: positiveIntegerSchema.optional(),
//   offsetId: Joi.string().optional(),
// });

export const signalSchema = Joi.object({
  id: Joi.string().required(),
  image: Joi.string().required(),
  label: Joi.string().required(),
}).unknown(false); // This ensures no extra fields are allowed

export const signalEditSchema = Joi.object({
  id: Joi.string().optional(),
  image: Joi.string().optional(),
  label: Joi.string().optional(),
}).unknown(false); // This ensures no extra fields are allowed
