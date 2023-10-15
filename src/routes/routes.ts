import express from 'express';

import { getCurrencies } from '../controllers/currencies';
import { errorHandler, errorMiddleWareRouter } from '../error';

const { Router } = express;
const router = Router();

enum ROUTE {
  API = '/',
}

router.get(ROUTE.API, errorHandler(getCurrencies));

router.use(errorMiddleWareRouter);

export { router };
