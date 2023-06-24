import express, { Router } from 'express';

import exportTrelloRoutes from "./export-trello";
import dreamsRoutes from "./dreams";

const router: Router = express.Router();

interface IRoute {
  path: string;
  route: Router;
}

const defaultIRoute: IRoute[] = [
  {
    path: '/dreams',
    route: dreamsRoutes,
  },
  {
    path: '/export-trello',
    route: exportTrelloRoutes,
  },
];

defaultIRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
