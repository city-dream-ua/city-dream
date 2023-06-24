import express from 'express';

import http from 'http';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import router from "./routes";

import { config } from "./common/config";

const app = express();

app.use(logger('dev'));
app.use(cookieParser());

app.use(router);

const server = http.createServer(app);

server.listen(config.app.PORT, () => {
  console.log(`Server listening on port ${config.app.PORT}`);
});

process.on("uncaughtException", (err: Error) => {
  console.log("Uncaught error", err.message);
});

process.on("unhandledRejection", (err: Error) => {
  console.log("Uncaught ASYNC error", err.message);
});
