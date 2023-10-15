import * as Sentry from '@sentry/node';
import cors from 'cors';
import express from 'express';

import { config } from './config/config';
import { errorMiddleWare } from './error';
import { router } from './routes/routes';
import { initSentry } from './sentry';

const app = express();

initSentry(app, config.DSN, config.MODE);

app.use(cors());
app.use(express.json());

app.use(config.API, router);

app.get('*', (_, res) => {
  res
    .status(200)
    .send({ message: `Server started on port ${config.PORT}`, status: 'ok' });
});

app.use(Sentry.Handlers.errorHandler());

app.use(errorMiddleWare);

export { app };
