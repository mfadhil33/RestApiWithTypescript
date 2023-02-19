import type ProductType from '../types/product.type';
import productModel from '../models/product.model';

export const addProductToDB = async (payload: ProductType) => {
  return await productModel.create(payload);
};

export const getProducts = async () => {
  return await productModel
    .find()
    .then((data) => {
      return data;
    }).catch((err) => {
      console.error(err);
    });
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const getProductById = async (id: String) => {
  return await productModel.findOne({ product_id: id });
};
