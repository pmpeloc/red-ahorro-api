import 'dotenv/config';

export default {
  JWT_SECRET: process.env.JWT_SECRET,
  DB: {
    URI: process.env.MONGODB_URI,
  },
  PORT: process.env.PORT,
};
