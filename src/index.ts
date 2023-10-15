import { app } from './app';
import { config } from './config/config';
import { logger } from './logger/logger';

if (!config.PORT) throw new Error('You have to set a port');
if (!config.API) throw new Error('You have to set a API endpoint');

const init = async (port: number) =>
  app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
  });

init(config.PORT);
