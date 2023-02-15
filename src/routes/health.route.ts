import { logger } from './utils/logger';
import { type NextFunction, Router, type Request, type Response } from 'express';

export const HealthRouter: Router = Router();

HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Health check success');
  res.status(200).send({ status: '200' });
});
