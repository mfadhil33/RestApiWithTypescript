import { logger } from './utils/logger';
import { routes } from './routes';
import express, { type Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import './utils/ConnectDB';
dotenv.config();

const app: Application = express();
const port: number | undefined | string = process.env.PORT;
const host: string | undefined = process.env.HOST;

// parse body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes(app);

// cors acces handler
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Method', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});
app.listen(port, () => {
  logger.info(`server runnning on  http://${host}:${port}`);
});
