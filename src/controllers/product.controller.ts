import { createProductValidation } from '../validations/product.validation';
import { logger } from './../routes/utils/logger';
import { type Request, type Response } from 'express';

export const createProduct = (req: Request, res: Response) => {
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
};

export const getProduct = (req: Request, res: Response) => {
  const products = [
    { name: 'sepatu', price: 2000 },
    { name: 'kaos', price: 3000 }
  ];
  const {
    params: { name }
  } = req;
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (name) {
    // eslint-disable-next-line array-callback-return
    const filterProduct = products.filter((product) => {
      if (product.name === name) {
        return product;
      }
    });
    if (filterProduct.length === 0) {
      logger.info('Data not found');
      return res.status(404).send({
        status: false,
        statusCode: 404,
        data: {}
      });
    }
    logger.info('Success get product');
    res.status(200).send({ status: true, statusCode: 200, data: filterProduct[0] });
  }
  logger.info('success get product data');
  return res.status(200).send({
    status: true,
    statusCode: 200,
    data: products
  });
};
