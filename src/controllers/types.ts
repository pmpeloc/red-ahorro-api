export enum ResponseCodes {
  USER_NEW = 'USER_NEW',
  USER_LOGIN = 'USER_LOGIN',
  USER_EMPTY = 'USER_EMPTY',
  USER_ALREADY_EXISTS = 'USER_ALREADY_EXISTS',
  USER_NOT_EXISTS = 'USER_NOT_EXISTS',
  USER_INVALID_CREDENTIALS = 'USER_INVALID_CREDENTIALS',
}

export const responseMessageMapper: { [key in ResponseCodes]: string } = {
  [ResponseCodes.USER_NEW]: 'New user saved successfully',
  [ResponseCodes.USER_LOGIN]: 'User login successfully',
  [ResponseCodes.USER_EMPTY]: 'Please, send your email and password',
  [ResponseCodes.USER_ALREADY_EXISTS]: 'The user already exists',
  [ResponseCodes.USER_NOT_EXISTS]: 'The user not exists',
  [ResponseCodes.USER_INVALID_CREDENTIALS]:
    'The email or password are incorrect',
};
