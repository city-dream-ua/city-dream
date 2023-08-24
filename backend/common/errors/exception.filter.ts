import { Request, Response, NextFunction } from "express";

import { HttpError } from "./http.error";

export class ExceptionFilter {
   catch(
      err: Error | HttpError,
      req: Request,
      res: Response,
      _: NextFunction
   ): void {
      if (err instanceof HttpError) {
         console.warn((`[${err.context}] Error ${err.statusCode}: ${err.message}`));
         res.status(err.statusCode).send({ error: err.message });
      }
      else {
         console.error(err.message);
         res.status(500).send({ error: err.message });
      }
   }
}

export const exceptionFilter = new ExceptionFilter();
