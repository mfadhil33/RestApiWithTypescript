import { getProducts, addProductToDB, getProductById, updateProductById, deleteProductById } from './../services/product.service';
import { createProductValidation, updateProductValidation } from '../validations/product.validation';
import { logger } from '../utils/logger';
import { type Request, type Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidv4();
  const { error, value } = createProductValidation(req.body);
  if (error != null) {
    logger.error('ERR: product - create', error.details[0].message);
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} });
  }
  try {
    await addProductToDB(value);
    logger.info('success add new a product');
    res.status(201).send({
      status: true,

      statusCode: 201,
      message: 'Add product success '
    });
  } catch (err) {
    logger.error('ERR: product - create', err);
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: err
    });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req;
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (id) {
    // eslint-disable-next-line array-callback-return
    const product = await getProductById(id);
    if (product == null) {
      logger.info('product not found');
      return res.status(200).send({ status: false, statusCode: 404, message: `product with id ${id} not found` });
    }
    logger.info('Success get product');
    res.status(200).send({ status: true, statusCode: 200, data: product });
  } else {
    const products: any = await getProducts();
    logger.info('Success get product data');
    return res.status(200).send({ status: true, statusCode: 200, data: products });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req;

  const { error, value } = updateProductValidation(req.body);
  if (error != null) {
    logger.error('ERR: product - create', error.details[0].message);
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} });
  }
  try {
    const result = await updateProductById(id, value);
    if (result == null) {
      return res.status(404).json({ status: false, statusCode: 404, message: `id ${id} not found` });
    }

    logger.info('success updated a product');
    res.status(201).send({
      status: true,

      statusCode: 201,
      message: 'update product success '
    });
  } catch (err) {
    logger.error('ERR: product - updated', err);
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: err
    });
  }
};

export const deleteProduction = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req;

  try {
    const result = await deleteProductById(id);
    if (result == null) {
      return res.status(404).json({ status: false, statusCode: 404, message: `id ${id} not found` });
    }
    logger.info('Success delete product');
    return res.status(200).json({ status: true, statusCode: 200, message: 'Delete product success' });
  } catch (err) {
    logger.error('Err: product - delete = ', err);
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: err
    });
  }
};
