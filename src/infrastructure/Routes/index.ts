import { Express } from 'express';
import { someRoutes } from '@/infrastructure/Routes/someRoutes';
import { http } from '@/infrastructure/Services/http';

export default (app: Express): void => {
  app.use('/someRoutes', someRoutes(http));
  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
};
