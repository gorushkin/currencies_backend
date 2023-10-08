import { app } from './app';
import { config } from './config';

const init = async (port: number) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
init(config.PORT);
