import { NextFunction, Request, Response, Router } from 'express';

import { getAllDreams, getDream } from "../controllers";

const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dreams = await getAllDreams();

    res.send(dreams);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dream = await getDream(req.params.id);

    res.send(dream);
  } catch (err) {
    next(err);
  }
});

export default router;
