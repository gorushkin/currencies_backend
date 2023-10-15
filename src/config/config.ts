import * as dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const API = process.env.API || '/currencies/api';
const DSN = process.env.DSN || '';
const MODE = process.env.MODE || 'dev';

export const config = { PORT, API, DSN, MODE };
