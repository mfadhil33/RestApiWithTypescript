/* eslint-disable @typescript-eslint/ban-types */
import bcrypt from 'bcrypt';

// encode
export const hashing = (password: any) => {
  return bcrypt.hashSync(password, 10);
};

// decode
export const checkPassword = (password: string, userPassword: string) => {
  return bcrypt.compareSync(password, userPassword);
};
