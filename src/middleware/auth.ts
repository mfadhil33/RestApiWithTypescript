import { type Request, type Response, type NextFunction } from 'express';

export const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!user) {
    return res.sendStatus(403);
  }
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  return next();
};

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!user || user._doc.role !== 'admin') {
    return res.sendStatus(403);
  }
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  return next();
};
