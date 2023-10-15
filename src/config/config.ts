import * as dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const LOGS_DIR = process.env.LOGS_DIR || '';
const API = process.env.API || '/currencies/api';
const DSN = process.env.DSN || '';
const MODE = process.env.MODE || 'dev';

export const config = { PORT, LOGS_DIR, API, DSN, MODE };
