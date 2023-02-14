import  express , {Application, Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
dotenv.config();

const app: Application = express();
const port: Number | undefined | string  = process.env.PORT;
const host : string | undefined = process.env.HOST;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', (req: Request, res: Response, nex: NextFunction) => {

    res.status(200).send({data: 'Hello world'});
});

app.listen(port, () => {
 console.log(`server runnning on  http://${host}:${port}`);
});