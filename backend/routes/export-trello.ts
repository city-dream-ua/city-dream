import { NextFunction, Request, Response, Router } from "express";

import { getCardData } from "../services";
import {HttpError} from "../common/errors";
import {StatusCodes} from "../types";

const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const trelloRes = await getCardData();

    if (trelloRes) {
      res.send("Data has been successfully synchronized");
    } else {
      throw new HttpError(StatusCodes.FORBIDDEN, "Can't synchronize data, please try again later");
    }

  } catch (err) {
    next(err);
  }
});

export default router;
