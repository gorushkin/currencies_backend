import express from 'express';

import { getCurrencies } from '../controllers/currencies';
import { errorHandler, errorMiddleWareRouter } from '../error';

const { Router } = express;
const router = Router();

enum ROUTE {
  TEST = '/test',
  API = '/api',
}

router.get(ROUTE.TEST, (_, res) => {
  res.status(200).send({ message: 'server is running', status: 'ok' });
});

router.get(ROUTE.API, errorHandler(getCurrencies));

router.use(errorMiddleWareRouter);

export { router };
