import { logger } from './utils/logger';
import { type NextFunction, Router, type Request, type Response } from 'express';

export const ProductRouter: Router = Router();

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get product');
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'sepatu sport', price: 50000 }] });
});

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('success add new a product');
  res.status(201).send({
    status: true,

    statusCode: 200,
    data: req.body
  });
});
