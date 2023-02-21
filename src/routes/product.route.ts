import { requireUser, requireAdmin } from './../middleware/auth';
/* eslint-disable @typescript-eslint/no-misused-promises */
import { createProduct, deleteProduction, getProduct, updateProduct } from './../controllers/product.controller';
import { Router } from 'express';

export const ProductRouter: Router = Router();

ProductRouter.get('/', getProduct);
ProductRouter.get('/:id', getProduct);
ProductRouter.post('/', requireAdmin, createProduct);
ProductRouter.put('/:id', updateProduct);
ProductRouter.delete('/:id', deleteProduction);
