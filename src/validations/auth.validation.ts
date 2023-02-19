import type UserType from '../types/user.type';
import joi from 'joi';

export const createUserValidation = (payload: UserType) => {
  const schema = joi.object({
    user_id: joi.string().required(),
    email: joi.string().email().required(),
    name: joi.string().min(10).max(50).required(),
    password: joi.string().min(10).required(),
    role: joi.string().allow('', null)
  });

  return schema.validate(payload);
};

export const createSessionValidation = (payload: UserType) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(10).required()

  });

  return schema.validate(payload);
};
