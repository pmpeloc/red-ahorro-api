import { IUserRequest } from '../models/user.model';
import { findUserByEmail, saveUser } from '../repositories/user.repository';
import { createToken } from '../utils/createToken';
import {
  UserAlreadyExists,
  UserInvalidCredentials,
  UserNotExists,
} from './errors.class';

export const createUser = async (newUser: IUserRequest): Promise<void> => {
  const userFound = await findUserByEmail(newUser.email);

  if (userFound) {
    throw new UserAlreadyExists();
  }

  await saveUser(newUser);
};

export const loginUser = async (user: IUserRequest): Promise<string> => {
  const userFound = await findUserByEmail(user.email);

  if (!userFound) {
    throw new UserNotExists();
  }

  const matchPassword = await userFound.comparePassword(user.password);

  if (matchPassword) {
    return createToken(userFound);
  }

  throw new UserInvalidCredentials();
};
