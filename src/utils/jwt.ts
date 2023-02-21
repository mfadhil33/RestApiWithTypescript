import jwt from 'jsonwebtoken';
import CONFIG from '../config/environment';

// eslint-disable-next-line @typescript-eslint/ban-types
export const signJWT = (payload: Object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(payload, CONFIG.jwt_private, {
    ...((options != null) && options),
    algorithm: 'RS256'
  });
};

export const verifyJwt = (token: string) => {
  try {
    const decoded: any = jwt.verify(token, CONFIG.jwt_public);
    return {
      valid: true,
      expired: false,
      decoded
    };
  } catch (err: any) {
    return {
      valid: false,
      expired: err.message === 'jtw is expired or not eligible to use',
      decoded: null
    };
  }
};
