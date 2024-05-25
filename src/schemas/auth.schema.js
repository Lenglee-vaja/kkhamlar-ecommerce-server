import Joi from "joi"
export const signUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required().messages({
        "string.email": "Email must be in the correct format (e.g., example@example.com)"
    }),
    phone: Joi.string().regex(/^[25789]\d{7}$/).required().messages({
        "string.pattern.base": "Phone number must start with 2, 5, 7, 8, or 9 and have 8 digits"
    }),
    password: Joi.string().min(8).required(),
})