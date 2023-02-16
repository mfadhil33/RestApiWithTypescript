import { getData } from './../controllers/health.controller';
import { Router } from 'express';

export const HealthRouter: Router = Router();

HealthRouter.get('/', getData);
