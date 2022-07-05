import express, { Application, Response, Request } from 'express';
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import establishConnection from './db/connection';

const app: Application = express();
dotenv.config();

const PORT = process.env.PORT || 7100;

establishConnection();

// Ping
app.get('/api/v1/ping', (_req: Request, res: Response) => {
  res.json({ message: 'Auth Service is working' });
});

app.listen(PORT, () => {
  console.log(`Auth-Service started at port ${PORT}`);
});
