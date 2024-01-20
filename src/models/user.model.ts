import { Document, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends IUserRequest, Document {
  comparePassword: (password: string) => Promise<boolean>;
}

export interface IUserRequest {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre<IUser>('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<IUser>('app_users', userSchema);
