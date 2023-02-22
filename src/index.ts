/* eslint-disable @typescript-eslint/ban-types */
import { logger } from './utils/logger';
import { routes } from './routes';
import express, { type Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import './utils/ConnectDB';

import deserializeToken from './middleware/deserializedToken';
dotenv.config();
const app: Application = express();
const port: Number | undefined | string = process.env.PORT;
const host: String | undefined = process.env.HOST;

// parse body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors acces handler
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Method', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use(deserializeToken);
routes(app);
app.listen(port, () => {
  logger.info(`server runnning on  http://${host}:${port}`);
});
