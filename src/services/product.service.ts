import productModel from '../models/product.model';

export const getProducts = async () => {
  return await productModel
    .find()
    .then((data) => {
      return data;
    }).catch((err) => {
      console.error(err);
    });
};
