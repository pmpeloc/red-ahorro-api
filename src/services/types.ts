import { UserErrorCodes, UserErrorMessages } from '../controllers/types';

export class UserAlreadyExist implements Error {
  public name = 'UserAlreadyExist';
  public message = UserErrorMessages.ALREADY_EXISTS;
  public code = UserErrorCodes.ALREADY_EXISTS;

  constructor() {}
}
