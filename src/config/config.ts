import * as dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT) || null;
const API = process.env.API || '';
const DSN = process.env.DSN || '';
const MODE = process.env.MODE || 'dev';

export const config = { PORT, API, DSN, MODE };
