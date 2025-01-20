import Joi from "joi";
import { positiveIntegerStringSchema } from "./shared-schemas";

// Define the Joi schema for the Answer interface
export const answerSchema = Joi.object().pattern(
  Joi.string(),
  Joi.string().allow("")
);

export const questionSchema = Joi.object({
  id: positiveIntegerStringSchema.required(),
  image: Joi.string().allow(null).required(),
  label: Joi.string().required(),
  answers: answerSchema.required(),
  correct_answers: Joi.array().items(Joi.string().allow("")).required(),
}).unknown(false);

export const questionEditSchema = Joi.object({
  id: positiveIntegerStringSchema.optional(),
  image: Joi.string().allow(null).optional(),
  label: Joi.string().optional(),
  answers: answerSchema.optional(),
  correct_answers: Joi.array().items(Joi.string().allow("")).optional(),
}).unknown(false);


