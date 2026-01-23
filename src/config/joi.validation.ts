import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  ENVIRONMENT: Joi.string().valid('dev', 'prod', 'qa').default('dev'),
  MONGODB: Joi.string().required().messages({
    'any.required': 'The MONGODB connection string is required (uri).',
    'string.empty': 'The MONGODB connection string cannot be empty',
  }),
  PORT: Joi.number().default(3000),
  DEFAULT_LIMIT: Joi.number().default(10),
});
