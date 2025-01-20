import Joi from "joi";
import { positiveIntegerStringSchema } from "./shared-schemas";

export const subjectSchema = Joi.object({
  id: positiveIntegerStringSchema.required(),
  courses: Joi.array()
    .items(positiveIntegerStringSchema)
    .unique()
    .min(1)
    .required(),
  content: Joi.array()
    .items(positiveIntegerStringSchema)
    .unique()
    .min(1)
    .required(),
}).unknown(false); // This ensures no extra fields are allowed

export const subjectEditSchema = Joi.object({
  id: positiveIntegerStringSchema.optional(),
  courses: Joi.array()
    .items(positiveIntegerStringSchema)
    .unique()
    .min(1)
    .optional(),
  content: Joi.array()
    .items(positiveIntegerStringSchema)
    .unique()
    .min(1)
    .optional(),
}).unknown(false);
