import Joi from "joi";
import {
  drivingLicencesSchema,
  positiveIntegerSchema,
  positiveIntegerStringSchema,
} from "./shared-schemas";
import { answerSchema } from "./questions";

export const examCriteriaEditSchema = Joi.object({
  length: Joi.number().integer().min(0).optional(),
  duration: Joi.number().integer().min(0).optional(),
  threshold: Joi.number().integer().min(0).optional(),
});

export const examSettingsSchema = Joi.object({
  licenses: drivingLicencesSchema.required(),
});

// Define the Joi schema for the Question record interface
const questionRecordSchema = Joi.object({
  id: positiveIntegerStringSchema.required(),
  label: Joi.string().required(),
  image: Joi.string().allow(null).required(),
  answers: answerSchema.required(),
  correct_answers: Joi.array().items(Joi.string()).required(),
  answered: Joi.array().items(Joi.string()).required(),
});

// Define the Joi schema for the Exam class
export const examRecordSchema = Joi.object({
  // begin - workaround to allow generateExam return format
  id: Joi.string().optional(),
  date: Joi.string().optional().isoDate(),
  // end
  licenses: drivingLicencesSchema.required(),
  length: positiveIntegerSchema.required(),
  threshold: Joi.number().integer().min(0),
  duration: positiveIntegerSchema.required(),
  // time_spent: positiveIntegerSchema.required(),

  questions: Joi.array().items(questionRecordSchema).required(),
});


export const activationCodeSchema = Joi.object({
  code: Joi.string().required(),
})