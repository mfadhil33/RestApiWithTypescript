/* eslint-disable @typescript-eslint/ban-types */
import joi from 'joi';
import type ProductType from '../types/product.type';

export const createProductValidation = (payload: ProductType) => {
  const schema = joi.object({
    product_id: joi.string().required(),
    name: joi.string().required(),
    price: joi.number().allow('', null),
    size: joi.string().allow('', null)
  });

  return schema.validate(payload);
};

export const updateProductValidation = (payload: ProductType) => {
  const schema = joi.object({
    name: joi.string().allow('', null),
    price: joi.number().allow('', null),
    size: joi.string().allow('', null)
  });

  return schema.validate(payload);
};
