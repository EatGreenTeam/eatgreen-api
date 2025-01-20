import {
  UserType,
  allDrivingLicenses,
  CourseType,
} from "../../../global/utils/constants";

import Joi from "joi";

export const positiveIntegerSchema = Joi.number().integer().min(0);
export const positiveIntegerStringSchema =
  Joi.string().regex(/^0$|^0*?[1-9]\d*$/); // Matches 0 or positive integers

export const userTypeSchema = Joi.string().valid(
  UserType.Candidate,
  UserType.Instructor
);

export const drivingLicencesSchema = Joi.array()
  .items(...allDrivingLicenses.map((license) => Joi.string().valid(license)))
  .unique()
  .min(1);

export const courseTypeSchema = Joi.string().valid(
  CourseType.Raw,
  CourseType.Quiz
);
