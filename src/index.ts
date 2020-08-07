import express from 'express';
import routes from '@/routes';

const port = process.env.PORT || 5000;
const app = express();

routes(app);

app.listen(port, () => console.log('Running on the port: ' + port));
