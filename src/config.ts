import * as dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const LOGS_DIR = process.env.LOGS_DIR || '';

export const config = { PORT, LOGS_DIR };
