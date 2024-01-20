import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import config from '../config';
import { findUserById } from '../repositories/user.repository';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET,
};

export default new Strategy(options, async (payload, done) => {
  try {
    const userFound = await findUserById(payload.id);

    if (userFound) {
      return done(null, userFound);
    }

    return done(null, false);
  } catch (e) {
    console.error(e);
  }
});
