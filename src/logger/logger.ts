import pino, { Logger as Pino } from 'pino';

export class Logger {
  logger: Pino;
  constructor() {
    this.logger = pino({
      timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
    });
  }

  info = (message: string) => this.logger.info(message);
  error = (message: string) => this.logger.error(message);
}

export const logger = new Logger();
