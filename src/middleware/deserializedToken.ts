import { verifyJWt } from '../utils/jwt';
import { type Request, type Response, type NextFunction } from 'express';

// note
// for generate, must be used jwt public
const deserializeToken = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.replace(/^Bearer\s/, '');
  console.log(accessToken);
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!accessToken) {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return next();
  }
  const token: any = verifyJWt(accessToken);
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (token.decoded) {
    res.locals.user = token.decoded;
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return next();
  }

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (token.expired) {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return next();
  }
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  return next();
};

export default deserializeToken;
