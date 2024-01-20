import User, { IUser } from '../models/user';
import { UserAlreadyExist } from './types';

export const createUser = async (props: IUser): Promise<void> => {
  const { email, password } = props;

  const userFound = await User.findOne({ email });

  if (userFound) {
    throw new UserAlreadyExist();
  }

  const newUser = new User({ email, password });

  await newUser.save();
};
