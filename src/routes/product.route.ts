import { createProductValidation } from './../validation/product.validation';
import { logger } from './utils/logger';
import { type NextFunction, Router, type Request, type Response } from 'express';

export const ProductRouter: Router = Router();

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get product');
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'sepatu sport', price: 50000 }] });
});

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body);
  if (error != null) {
    logger.error('ERR: product - create', error.details[0].message);
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} });
  }
  logger.info('success add new a product');
  res.status(201).send({
    status: true,

    statusCode: 200,
    message: 'Add product success ',
    data: value
  });
});
