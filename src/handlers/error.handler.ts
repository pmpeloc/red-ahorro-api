import { Response } from 'express';

import { ResponseCodes, responseMessageMapper } from '../controllers/types';
import {
  UserAlreadyExists,
  UserInvalidCredentials,
  UserNotExists,
} from '../services/errors.class';
import {
  GenericErrorsCode,
  GenericErrorsMessages,
} from '../types/genericErrors';

export type IResponse = {
  code: ResponseCodes;
  message: string;
  errorStackMessage?: string;
};

export const errorHandler = (
  res: Response,
  error: unknown
): Response<IResponse> => {
  if (error instanceof UserAlreadyExists) {
    return res.status(400).json({
      code: ResponseCodes.USER_ALREADY_EXISTS,
      message: responseMessageMapper[ResponseCodes.USER_ALREADY_EXISTS],
    });
  }

  if (error instanceof UserNotExists) {
    return res.status(400).json({
      code: ResponseCodes.USER_NOT_EXISTS,
      message: responseMessageMapper[ResponseCodes.USER_NOT_EXISTS],
    });
  }

  if (error instanceof UserInvalidCredentials) {
    return res.status(400).json({
      code: ResponseCodes.USER_INVALID_CREDENTIALS,
      message: responseMessageMapper[ResponseCodes.USER_INVALID_CREDENTIALS],
    });
  }

  if (error instanceof Error) {
    return res.status(500).json({
      code: GenericErrorsCode.ERROR_500,
      message: GenericErrorsMessages.ERROR_500,
      errorStackMessage: error.message,
    });
  }

  return res;
};
