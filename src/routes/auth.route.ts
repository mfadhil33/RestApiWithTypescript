import { registerUser, createSession } from './../controllers/auth.controller';
import { Router } from 'express';

export const AuthRouter: Router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
AuthRouter.post('/register', registerUser);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
AuthRouter.post('/login', createSession);
