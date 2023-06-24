import { NextFunction, Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {

    res.send("All dreams");
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {

    res.send("One dream");
  } catch (err) {
    next(err);
  }
});

export default router;
