import joi from 'joi';

interface ProductInterface {

  name: string
  price: number
}
export const createProductValidation = (payload: ProductInterface) => {
  const schema = joi.object({
    name: joi.string().required(),
    price: joi.number().allow('', null)
  });

  return schema.validate(payload);
};
