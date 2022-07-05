import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import establishConnection from './db/connection';

const app:Application = express();
dotenv.config();

const PORT = process.env.PORT || 7102;

establishConnection();

// Ping
app.get('/api/v1/ping', (_req: Request, res: Response) => {
  res.json({ message: 'Order Service is working' });
});

app.listen(PORT, () => {
  console.log(`Order-Service started at port ${PORT}`);
});
