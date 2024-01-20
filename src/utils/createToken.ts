import jwt from 'jsonwebtoken';

import { IUser } from '../models/user.model';
import config from '../config';

const ONE_DAY = 86400;

export const createToken = (user: IUser): string => {
  return jwt.sign({ id: user.id, email: user.email }, config.JWT_SECRET!, {
    expiresIn: ONE_DAY,
  });
};
