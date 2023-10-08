import { app } from './app';
import { config } from './config';
import { logger } from './logger/logger';

const init = async (port: number) => {
  app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
  });
};
init(config.PORT);
