import Joi from "joi";
import { positiveIntegerStringSchema } from "./shared-schemas";

export const articleSchema = Joi.object({
  id: positiveIntegerStringSchema.required(),
  author: Joi.string().allow(null).required(),
  publish_date: Joi.string().isoDate().required(),
  title: Joi.string().required(),
  content: Joi.string().allow("").required(),
}).unknown(false); // This ensures no extra fields are allowed

export const articleEditSchema = Joi.object({
  id: positiveIntegerStringSchema.optional(),
  author: Joi.string().allow(null).optional(),
  publish_date: Joi.string().isoDate().optional(),
  title: Joi.string().optional(),
  content: Joi.string().allow("").optional(),
}).unknown(false);
