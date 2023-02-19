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

// eslint-disable-next-line @typescript-eslint/ban-types
export const updateProductById = async (id: String, payload: ProductType) => {
  const result = await productModel.findOneAndUpdate(
    {

      product_id: id
    },
    { $set: payload }

  );
  return result;
};

export const deleteProductById = async (id: string) => {
  const result = await productModel.findOneAndDelete({ product_id: id });
  return result;
};
