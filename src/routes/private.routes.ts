import { Request, Response, Router } from 'express';
import passport from 'passport';

const router = Router();

router.get(
  '/products',
  passport.authenticate('jwt', { session: false }),
  (req: Request, res: Response) => {
    res.send('Authorized');
  }
);

export default router;
