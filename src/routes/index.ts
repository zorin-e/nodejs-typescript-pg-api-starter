import { Request, Response, Express } from 'express';

export default (app: Express) => {
  app.use((req: Request, res: Response) => {
    res.status(200).json({
      title: 'Hello from the node API',
    });
  });
};
