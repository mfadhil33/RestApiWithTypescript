import type UserType from '../types/user.type';
import userModel from '../models/user.model';
import { type EmailOptions } from 'joi';

export const createUser = async (payload: UserType) => {
  return await userModel.create(payload);
};

export const findUserByEmail = async (email: EmailOptions) => {
  return await userModel.findOne({ email });
};
