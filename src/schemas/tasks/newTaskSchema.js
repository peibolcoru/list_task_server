const Joi = require("joi");

const newtaskSchema = Joi.object({
    title : Joi.string().required().max(30).messages({
        'any.required': 'Title is required',
        'string.max': 'The title must not exceed 30 characters',
    }),
    text : Joi.string().max(400).allow(``),
    statusId : Joi.number().required().messages({
        'any.required': 'The label is required',
    })
    })

module.exports = newtaskSchema;