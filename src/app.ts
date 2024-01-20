import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config';
import authRoutes from './routes/auth.routes';

// init
const app = express();

// settings
app.set('port', config.PORT);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send(`API is ready in port ${app.get('port')}`);
});
app.use(authRoutes);

export default app;
