import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';

import config from './config';
import authRoutes from './routes/auth.routes';
import privateRoutes from './routes/private.routes';
import passportMiddleware from './middlewares/passport';

// init
const app = express();

// settings
app.set('port', config.PORT);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.get('/', (req, res) => {
  res.send(`API is ready in port ${app.get('port')}`);
});
app.use(authRoutes);
app.use(privateRoutes);

export default app;
