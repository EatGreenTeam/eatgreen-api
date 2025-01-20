import Joi from "joi";

export const activationCodeSchema = Joi.object({
    code: Joi.string().required(),
})