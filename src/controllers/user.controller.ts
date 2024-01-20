import { Request, Response } from 'express';

import { IUser } from '../models/user';
import {
  UserErrorCodes,
  UserErrorMessages,
  UserSuccessCodes,
  UserSuccessMessages,
} from './types';
import { createUser } from '../services/user.service';
import { UserAlreadyExist } from '../services/types';
import {
  GenericErrorsCode,
  GenericErrorsMessages,
} from '../types/genericErrors';

export const signup = async (
  req: Request<{}, {}, IUser>,
  res: Response<{ code: string; message: string; stackMessage?: string }>
) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res
      .status(400)
      .json({ code: UserErrorCodes.EMPTY, message: UserErrorMessages.EMPTY });
  }

  try {
    await createUser({ email, password });

    return res.status(201).json({
      code: UserSuccessCodes.NEW_USER,
      message: UserSuccessMessages.NEW_USER,
    });
  } catch (e) {
    if (e instanceof UserAlreadyExist) {
      return res.status(400).json({
        code: UserErrorCodes.ALREADY_EXISTS,
        message: UserErrorMessages.ALREADY_EXISTS,
      });
    }

    if (e instanceof Error) {
      return res.status(500).json({
        code: GenericErrorsCode.ERROR_500,
        message: GenericErrorsMessages.ERROR_500,
        stackMessage: e.message,
      });
    }
  }
};

export const signin = (req: Request, res: Response) => {
  res.send('signin');
};
