import { HttpTransport } from '@/infrastructure/HttpTransport';
import { Router, Request, Response } from 'express';

const someRoutes = (http: HttpTransport): Router => {
  const routes = Router();

  routes.get('/', (req, res) => {
    res.json({
      payload: { message: 'Eosago' },
      status: 200,
      success: true,
    });
  });

  routes.get('/order', async (req: Request, res: Response) => {
    try {
      const { payload, status } = await http.get(
        'https://api.somedomain.ru/route/1.0',
        {
          params: {
            key: 10,
          },
          headers: {
            Authorization: 'Bearer tokenhash',
          },
        },
      );

      const success = status === 200;

      res.status(status).json({
        payload:
          !success && !Object.keys(payload).length
            ? { message: 'Error' }
            : payload,
        status,
        success,
      });
    } catch (error) {
      res.status(500).json({
        payload: error,
        status: 500,
        success: false,
      });
    }
  });

  routes.get('/check-pay-status', async (req: Request, res: Response) => {
    res.status(200).json({
      title: 'check pay status',
    });
  });

  routes.get('/calculate/by-car-number', (req: Request, res: Response) => {
    res.status(200).json({
      title: 'by car number',
    });
  });

  routes.get('/calculate/approximate', (req: Request, res: Response) => {
    res.status(200).json({
      title: 'approximate',
    });
  });

  routes.get('/link/to-policy', (req: Request, res: Response) => {
    res.status(200).json({
      title: 'download eosago policy',
    });
  });

  routes.get('/kbm', (req: Request, res: Response) => {
    res.status(200).json({
      title: 'check kbm',
    });
  });
  return routes;
};

export { someRoutes };
