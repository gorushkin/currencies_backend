import { Request, Response, NextFunction, Router } from 'express';

import { logger } from '../logger/logger';

class AppError extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export const errorHandler =
  (controller: (req: Request, res: Response) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch (error) {
      next(error);
    }
  };

export const errorMiddleWareRouter = (
  error: AppError,
  _request: Request,
  _response: Response,
  next: NextFunction,
) => {
  next(error);
};

export const errorMiddleWare = (
  error: AppError,
  _request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (!(error instanceof AppError)) {
    logger.error(error);
    return response.status(500).send({ error: 'There is an error' });
  }
  logger.error(error.message);
  response.status(error.status).send({ error: error.message });
  next();
};

export default AppError;
