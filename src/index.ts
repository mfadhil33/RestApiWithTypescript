import { routes } from './routes';
import express, { type Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app: Application = express();
const port: number | undefined | string = process.env.PORT;
const host: string | undefined = process.env.HOST;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
app.listen(port, () => {
  console.log(`server runnning on  http://${host}:${port}`);
});
