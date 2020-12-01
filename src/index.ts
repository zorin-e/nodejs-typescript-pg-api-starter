import express from 'express';
import routes from '@/infrastructure/Routes';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';

const nodeEnv = process.env.NODE_ENV;
const isProd = nodeEnv === 'production';
const envFileName = isProd ? '.env' : '.env.' + nodeEnv;

dotenv.config({
  path: path.resolve(__dirname, '../' + envFileName),
});

const port = process.env.PORT || 5000;
const app = express();

app.use(morgan('combined'));

routes(app);

app.listen(port, () => console.log('Running on the port: ' + port));
