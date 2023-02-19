/* eslint-disable @typescript-eslint/ban-types */
import joi from 'joi';

interface ProductInterface {
  product_id: String
  name: String
  price: Number
  size: String
}
export const createProductValidation = (payload: ProductInterface) => {
  const schema = joi.object({
    product_id: joi.string().required(),
    name: joi.string().required(),
    price: joi.number().allow('', null),
    size: joi.string().allow('', null)
  });

  return schema.validate(payload);
};
