import { ResponseCodes, responseMessageMapper } from '../controllers/types';

export class UserAlreadyExists implements Error {
  public name = 'UserAlreadyExists';
  public message = responseMessageMapper[ResponseCodes.USER_ALREADY_EXISTS];
  public code = ResponseCodes.USER_ALREADY_EXISTS;

  constructor() {}
}

export class UserNotExists implements Error {
  public name = 'UserNotExists';
  public message = responseMessageMapper[ResponseCodes.USER_NOT_EXISTS];
  public code = ResponseCodes.USER_NOT_EXISTS;

  constructor() {}
}

export class UserInvalidCredentials implements Error {
  public name = 'UserInvalidCredentials';
  public message =
    responseMessageMapper[ResponseCodes.USER_INVALID_CREDENTIALS];
  public code = ResponseCodes.USER_INVALID_CREDENTIALS;

  constructor() {}
}
