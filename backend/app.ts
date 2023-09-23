import express from 'express';

import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import { config } from './common/config';
import { httpLogger } from "./common/logger";
import { exceptionFilter } from './common/errors';

import router from './routes'

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'https://your-allowed-domain.com'],  // replace with your frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(cookieParser());

app.use(httpLogger);

app.use(router);

(async () => await mongoose.connect(config.database.DB_LINK!))();

const server = http.createServer(app);

server.listen(config.app.PORT, () => {
  console.log(`Server listening on port ${config.app.PORT}`);
});

app.use(exceptionFilter.catch.bind(exceptionFilter));

process.on("uncaughtException", (err: Error) => {
  console.log("Uncaught error", err.message);
});

process.on("unhandledRejection", (err: Error) => {
  console.log("Uncaught ASYNC error", err.message);
});
