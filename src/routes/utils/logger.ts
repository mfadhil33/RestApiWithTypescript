import pino from 'pino';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import pretty from 'pino-pretty';
import moment from 'moment';

export const logger = pino({
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${moment().format()}"`
});
