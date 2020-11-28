import express from 'express';
import routes from '@/infrastructure/Routes';
import morgan from 'morgan';

const port = process.env.PORT || 5000;
const app = express();

app.use(morgan('combined'));

routes(app);

app.listen(port, () => console.log('Running on the port: ' + port));
