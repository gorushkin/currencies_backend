import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (_, res) => {
  res.status(200).send('server is running');
});

export { app };
