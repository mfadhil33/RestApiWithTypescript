import { logger } from './logger';

import mongoose from 'mongoose';
import config from '../config/environment';

mongoose.connect(`${config.db}`).then(() => {
  logger.info('Connected to MongoDb');
}).catch((err) => {
  logger.info('Could not connect to DB');
  logger.error(err);
  process.exit(1);
});
