import { Request, Response } from 'express';

import { createUser, loginUser } from '../services/user.service';
import { IUserRequest } from '../models/user.model';
import { ResponseCodes, responseMessageMapper } from './types';
import { IResponse, errorHandler } from '../handlers/error.handler';
import { IsUserLogin } from '../services/types';

export const signup = async (
  req: Request<{}, {}, IUserRequest>,
  res: Response<IResponse>
) => {
  const { email, password } = req.body;

  emptyUserHelper(email, password, res);

  try {
    await createUser({ email, password });

    return res.status(201).json({
      code: ResponseCodes.USER_NEW,
      message: responseMessageMapper[ResponseCodes.USER_NEW],
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

export const signin = async (
  req: Request<{}, {}, IUserRequest>,
  res: Response<IResponse & IsUserLogin>
) => {
  const { email, password } = req.body;

  emptyUserHelper(email, password, res);

  try {
    const token = await loginUser({ email, password });

    return res.status(200).json({
      code: ResponseCodes.USER_LOGIN,
      message: responseMessageMapper[ResponseCodes.USER_LOGIN],
      data: { token },
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

const emptyUserHelper = (email: string, password: string, res: Response) => {
  if (!email && !password) {
    return res.status(400).json({
      code: ResponseCodes.USER_EMPTY,
      message: responseMessageMapper[ResponseCodes.USER_EMPTY],
    });
  }
};
