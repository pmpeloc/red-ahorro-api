import User, { IUser, IUserRequest } from '../models/user.model';

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

export const saveUser = async (user: IUserRequest): Promise<IUser> => {
  const newUser: IUser = new User({
    email: user.email,
    password: user.password,
  });

  return await newUser.save();
};

export const findUserById = async (id: string) => {
  return await User.findById(id);
};
