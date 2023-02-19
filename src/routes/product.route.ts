/* eslint-disable @typescript-eslint/no-misused-promises */
import { createProduct, deleteProduction, getProduct, updateProduct } from './../controllers/product.controller';
import { Router } from 'express';

export const ProductRouter: Router = Router();

ProductRouter.get('/', getProduct);
ProductRouter.get('/:id', getProduct);
ProductRouter.post('/', createProduct);
ProductRouter.put('/:id', updateProduct);
ProductRouter.delete('/:id', deleteProduction);
