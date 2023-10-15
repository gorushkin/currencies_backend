import { Request, Response } from 'express';

import { getRates } from '../services/currencies';

export const getCurrencies = async (req: Request, res: Response) => {
  const rates = getRates();
  res.status(200).send({ data: rates, status: 'ok' });
};
