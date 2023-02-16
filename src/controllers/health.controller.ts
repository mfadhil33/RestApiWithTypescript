import { logger } from './../routes/utils/logger';

import { type NextFunction, type Request, type Response } from 'express';

export const getData = (req: Request, res: Response, next: NextFunction) => {
  logger.info('Health check success');
  res.status(200).send({ status: '200' });
};
