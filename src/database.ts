import mongoose from 'mongoose';

import config from './config';

mongoose.connect(config.DB.URI!);

const connection = mongoose.connection;

connection.once('open', () => {
  console.info('Mongodb connection success');
});

connection.on('error', (e) => {
  console.error(`Mongodb failed with error: ${e.message}`);
  process.exit(0);
});
