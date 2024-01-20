import { ResponseCodes } from '../controllers/types';

export type IsUserLogin = {
  code: ResponseCodes.USER_LOGIN;
  data: { token: string };
};
