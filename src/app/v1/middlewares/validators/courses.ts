import Joi from "joi";
import {
  courseTypeSchema,
  drivingLicencesSchema,
  positiveIntegerStringSchema,
} from "./shared-schemas";

export const courseSchema = Joi.object({
  id: positiveIntegerStringSchema.required(),
  licenses: drivingLicencesSchema.required(),
  title: Joi.string().required(),
  image: Joi.string().allow(null).required(),
  type: courseTypeSchema.required(),
  questions: Joi.array().items(Joi.string()).allow(null).required(),
  content: Joi.string().allow(null, "").required(),
}).unknown(false); // This ensures no extra fields are allowed

export const courseEditSchema = Joi.object({
  id: positiveIntegerStringSchema.optional(),
  licenses: drivingLicencesSchema.optional(),
  title: Joi.string().optional(),
  image: Joi.string().allow(null).optional(),
  type: courseTypeSchema.optional(),
  questions: Joi.array().items(Joi.string()).allow(null).optional(),
  content: Joi.string().allow(null, "").optional(),
}).unknown(false); // This ensures no extra fields are allowed
