import path from 'path';

import pino, { Logger as Pino } from 'pino';

import { config } from '../config';

export class Logger {
  logger: Pino;
  constructor(dir: string) {
    this.logger = pino({
      transport: {
        targets: [
          {
            target: 'pino/file',
            options: {
              destination: `${path.join(process.cwd(), dir)}`,
            },
            level: 'info',
          },
          {
            target: 'pino-pretty',
            options: {
              colorize: true,
            },
            level: 'info',
          },
        ],
      },
    });
  }

  info = (message: string) => this.logger.info(message);
  error = (message: string) => this.logger.error(message);
}

export const logger = new Logger(config.LOGS_DIR);
